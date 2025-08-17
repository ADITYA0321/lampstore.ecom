@echo off
setlocal enabledelayedexpansion

cd /d "D:\karan project\vite-project\public\tablelamp"

set count=1
for %%f in (*.jpeg *.jpg *.png) do (
    ren "%%f" image!count!.jpg
    set /a count+=1
)

echo Done! All images renamed to image1.jpg, image2.jpg, etc.
pause
