+++
title = "pythonのクラス"
tags = ["python"]
date = "2016-11-05"
banner = "banners/python.png"
+++

pythonのクラスについて

<!--more-->

## クラスの定義の仕方

以下のように定義します。

```python
class Person():
    def __init__(self, name):
        self.name = name

class EmailPerson(Person):
    def __init__(self, name, email):
        super().__init__(name)
        self.email = email
    def __str__(self):
        return "name:{} email:{}".format(self.name, self.email)

p = EmailPerson("井川", "hoge@hoge.com")
print(p)
name:井川 email:hoge@hoge.com
```

## getter,setterについて

> Pythonは、すべての属性とメソッドが公開であり、プログラマーが行儀よくふるまうのが前提になっているので、ゲッター、セッターを書く必要はない

と、前提としたうえで、それでも定義したい場合どうするか

- 方法1

   `name = property(get_name, set_name)`で定義する方法

  ```python
  class Duck():
      def __init__(self, name):
          self.__name = name
      def get_name(self):
          return self.__name
      def set_name(self, name):
          self.__name = name
      name = property(get_name, set_name)
  ```

- 方法2

  `@property @name.setter`で定義する方法

  ```python
  class Duck():
      def __init__(self, name):
          self.__name2 = name
      @property
      def name(self):
          print('inside the getter')
          return self.__name2
      @name.setter
      def name(self, name):
          print('inside the setter')
          self.__name2 = name
  ```

## 特殊メソッド

特殊メソッドは、'__ __'で囲まれています。

これを定義することで、下記のようなことができます。

### 比較のための特殊メソッド

| メソッド | 意味 |
| :------------- | :------------- |
| __eq__(self, other) | self == other|
| __ne__(self, other) | self != other|
| __lt__(self, other) | self < other|
| __le__(self, other) | self <= other|
| __ge__(self, other) | self >= other|


### 算術計算のための特殊メソッド

| メソッド | 意味 |
| :------------- | :------------- |
| __add__(self, other) | self + other|
| __sub__(self, other) | self - other|
| __mul__(self, other) | self * other|
| __floordiv__(self, other) | self // other|
| __truediv__(self, other) | self / other|
| __mode__(self, other) | self % other|
| __pow__(self, other) | self ** other|


参考サイト

- [Python入門 - クラス](http://www.tohoho-web.com/python/class.html)

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
