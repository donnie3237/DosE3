@echo off
:: Build for Linux
echo Building for Linux...
cross build --release --target x86_64-unknown-linux-gnu

:: Build for macOS
echo Building for macOS...
cross build --release --target x86_64-apple-darwin

:: Compress binaries
echo Compressing binaries...
tar -czvf dose-linux.tar.gz -C target\x86_64-unknown-linux-gnu\release dose
tar -czvf dose-macos.tar.gz -C target\x86_64-apple-darwin\release dose

echo Build complete!
pause
