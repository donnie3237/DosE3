#!/bin/sh
set -e

GITHUB_REPO="donnie3237/DosE3"
# ----------------------------------------------------

EXE_NAME="dose"
OLD_EXE_NAME="dose3"
# ----------------------------------------------------------------

OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"
INSTALL_DIR="$HOME/.$EXE_NAME"
BIN_DIR="$INSTALL_DIR/bin"
EXE_PATH="$BIN_DIR/$EXE_NAME"

case $ARCH in
    x86_64) ARCH="x64" ;;
    aarch64 | arm64) ARCH="arm64" ;;
esac

echo "Fetching latest release from GitHub..."
API_URL="https://api.github.com/repos/$GITHUB_REPO/releases/latest"

# FIX: ค้นหา asset ที่มีชื่อ 'dose3' อยู่ข้างใน
DOWNLOAD_URL=$(curl -s $API_URL | grep "browser_download_url.*${OLD_EXE_NAME}.*$OS-$ARCH.tar.gz" | cut -d '"' -f 4)

if [ -z "$DOWNLOAD_URL" ]; then
    echo "Error: Could not find a release for your OS/architecture ($OS-$ARCH)."
    echo "Please check the GITHUB_REPO variable and that a release with '${OLD_EXE_NAME}' assets exists."
    exit 1
fi

echo "Installing $EXE_NAME to $EXE_PATH..."
mkdir -p "$BIN_DIR"
curl -# -L -o "$INSTALL_DIR/release.tar.gz" "$DOWNLOAD_URL"
tar -xzf "$INSTALL_DIR/release.tar.gz" -C "$BIN_DIR"
rm "$INSTALL_DIR/release.tar.gz"

OLD_FILE_PATH="$BIN_DIR/$OLD_EXE_NAME"
if [ -f "$OLD_FILE_PATH" ]; then
    echo "Renaming $OLD_EXE_NAME to $EXE_NAME..."
    mv "$OLD_FILE_PATH" "$EXE_PATH"
fi

chmod +x "$EXE_PATH"

echo ""
echo "Installation complete! 🎉"
echo "The executable is located at: $EXE_PATH"
echo ""
echo "To make the '$EXE_NAME' command available everywhere, please add the following line to your shell's profile file (e.g., ~/.bashrc, ~/.zshrc):"
echo ""
echo "  export PATH=\"$HOME/.$EXE_NAME/bin:\$PATH\""
echo ""
echo "After adding the line, please restart your terminal."