# Hack Week Fall 2013 - Day 3 - Photoshare

## Pre-Installation
### Mac

Go to [this link](https://developer.apple.com/downloads/index.action) to
register as an Apple Developer and download the Command Line Tools for XCode,
taking care to download the correct version for your current operating system
version (i.e., Mavericks, Mountain Lion, etc.).

Press Command+Spacebar to open search, then search and open Terminal.

Now we will install [Homebrew](http://brew.sh) to manage the dependencies for
this project. Copy and paste the following command into the terminal, then press
enter.

    ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"

Then, run the following commands:

    brew install nodejs
    brew install mongodb


### Windows
We will be using [Chocolatey](http://chocolatey.org/) to manage the dependencies
for this project.

Type `Win+R` and enter `cmd` to open the command prompt. Copy the following
command, right click on the command prompt, paste the command, and press enter.

    @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin

Now, type the following commands, pressing enter after each one:

    cinst nodejs.install
    cinst nodejs.commandline
    cinst mongodb

Close and reopen your command prompt.

### Linux (Ubuntu and Debian)

Open a terminal and enter the following command:

    sudo apt-get install nodejs mongodb
