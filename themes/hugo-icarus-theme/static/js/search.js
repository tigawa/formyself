var pagesIndex; //json の本体
var lunrIndex;　//lunr のオブジェクト
var lunrResult; //lunr の結果オブジェクト

/* ここにconstent以下のカテゴリを増やした場合にメンテすべきところ　全文検索の対象にならない */
// var CATEGORYS = ['til', 'ml', 'c-sharp', 'post']
var CATEGORYS = ['til', 'ml', 'c-sharp', 'post'];

/**
 * Preparation for using lunr.js
 */
function initLunr() {
    var data = $(CATEGORYS).map(function (index, category) {
        return $.getJSON('/' + category + '/index.json')
    });
    $.when.apply(null, data)
        .done(makeLunrIndex)
        .fail(function () {
            alert("fail");
        });
}

function makeLunrIndex() {
    pagesIndex = $(arguments).map(function (index, obj) {
        var jsonData = obj[0];
        return jsonData;
    });
    // Object を Array に変更
    pagesIndex = Object.values(pagesIndex);
    lunrIndex = lunr(function () {
        this.use(lunr.ja)
        this.ref('ref')
        this.field('title', { boost: 10 })
        this.field('body')
        this.metadataWhitelist = ['position']
        pagesIndex.forEach(function (page) {
            this.add(page);
        }, this);
    });
}

/**
 * Searching pages using lunr
 * @param {String} query Query string for searching
 * @return {Object[]} Array of search results
 */
function search(query) {
    lunrResult = lunrIndex.search(query)
    return lunrResult.map(function (result) {
        return pagesIndex.filter(function (page) {
            return page.ref === result.ref
        })[0]
    })
}

/**
 * Setup UI for Search
 */
function initUI() {

    // Clear query when clear icon is clicked
    $('#searchBoxIcon').click(function () {
        $('#searchBox').val('')
        $('#searchBox').trigger('keyup')
    })

    // Event when chenging query
    $('#searchBox').keyup(function () {
        var $searchResults = $('#searchResults')
        var query = $(this).val()

        // Icon switching
        if (query.length) {
            $('#searchBoxIcon').attr('src', '/img/clear.png')
            $('#searchBoxIcon').css('cursor', 'pointer')
        } else {
            $('#searchBoxIcon').attr('src', '/img/search.png')
            $('#searchBoxIcon').css('cursor', 'default')
        }

        // Only trigger a search when 2 chars. at least have been provided
        if (query.length < 2) {
            $searchResults.hide()
            return
        }


        // Display search results
        renderResults(search(query))
        $searchResults.show()
    })

    // Emit keyup event for when the query is already setted with browser back etc.
    $('#searchBox').trigger('keyup')
}

/**
 * Rendering search results
 * @param {Object[]} results Array of search results
 */
function renderResults(results) {
    var $searchResults = $('#searchResults')
    var query = $('#searchBox').val()
    var BODY_LENGTH = 100
    var MAX_PAGES = 10

    // Clear search result
    $searchResults.empty()

    // Show message when results is empty
    if (!results.length) {
        $searchResults.append('<div class="searchResultPage">No results found for query "' + query + '"</div>')
        return
    }

    // Only show the ten first results
    results.slice(0, MAX_PAGES).forEach(function (result, idx) {
        var $searchResultPage = $('<div class="searchResultPage">')
        var metadata = lunrResult[idx].matchData.metadata
        var body = metadata[Object.keys(metadata)[0]].body
        if (!body) return;
        var matchPosition = body.position[0][0]
        var bodyStartPosition = (matchPosition - (BODY_LENGTH / 2) > 0) ? matchPosition - (BODY_LENGTH / 2) : 0

        $searchResultPage.append('<a class="searchResultTitle" href="' + result.ref + '">' + result.title + '</a>')

        $searchResultPage.append('<div class="searchResultBody">' + result.body.substr(bodyStartPosition, BODY_LENGTH) + '</div>')
        $searchResults.append($searchResultPage)

        // Highlight keyword
        $('#searchResults').mark(query)
    })
}

initLunr()

$(function () {
    initUI()
})