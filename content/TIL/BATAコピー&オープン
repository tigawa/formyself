+++ date = "2019-11-27T08:07:30+09:00" tags = ["TIL"] categories = ["TIL"] banner = "banners/til.png" author = "taiichi.igawa" type = "post" title = "win Bat copy-open" +++

コード
@echo off
setlocal

set cached_folder=%userprofile%\cached_delete_ok\
set dst_file="%cached_folder%%~n1%~x1"
set src_file=%1

if not exist %cached_folder% mkdir %cached_folder%

copy /Y %src_file% %dst_file%
start "hoge" %dst_file%

endlocal


