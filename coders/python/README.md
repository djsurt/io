# Node, Python and Conda Notes

## Node and npm

Check your versions. nvm optional.

	node -v
	npm -v

[npmjs.com](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) recommends installing the Node Version Manager [nvm](https://github.com/nvm-sh/nvm) to avoid permission errors when you run npm packages globally.  
Run `nvm ls` to see all the node versions you have installed. Update nvm to set your version of node:

**To install nvm** Use the [curl command to install nvm](https://github.com/nvm-sh/nvm).  Then run the export command below it. Restart your terminal.  
One a Mac since OS X 10.9, first run `touch ~/.zshrc`.

**Set your node version to v20**

	nvm install 20.14.0
	nvm use 20.14.0

We're avoiding node v22 because it has a [punycode error](https://stackoverflow.com/questions/68774489/punycode-is-deprecated-in-npm-what-should-i-replace-it-with) in data-commons build.  Run the above BEFORE invoking a virtual environment.

<!--
To installing node if the version commands find nothing:

	nvm install --lts --reinstall-packages-from=current
	nvm install node
	nvm alias default node
-->

**If you're not using Node Version Manager (nvm)** (above)
You can [install node/npm directly](https://nodejs.org/en/download). The installer includes the Node.js package manager (npm) within it, so you won't need to install npm separately.  
Skip this if you are using nvm (above). This directly updates your machine to the latest stable version of NodeJS.
<!-- https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version-->

	npm install -g n &&
	sudo n stable


## Python

Check python version (may differ in your virtual environments)
Only python3 was available after running `brew install python` after upgrading to Mac Sonoma OS.

	python --version
	python3 --version

<!--
	The above returned 2.7.16 on older mac which had Big Sur. Upgraded to Sonoma.
-->

If your python versionn is 3.10 or older, you may want to install the latest Python.
(3.11 is currently better than 3.12 for ) 
If you don't have brew yet, [download the .pkg installer](https://brew.sh).
You might also get a dialog to install xcode.

	brew install python

**List all Python versions installed on your system**
If you get none, but `python --version` return less than 3.0, you probably need to update your OS.

	ls -l /usr/local/bin/python*

If an old version of python is still appearing as the current version,
check if you are running the pyenv python environment.

	pyenv --version

You probably won't need pyenv now that python3 is widely supported.
If you are running pyenv, upgrade your python versions in pyenv to 3.12 or later.

	pyenv install 3.11
	pyenv global 3.11

As of Jul 22, 2024 - Python 3.12 is not compatible with the OpenWebUI build.

## pip

How to stop your virtual environment and update pip. &nbsp;Avoid appending 3 (as in pip3 or python3) once in a virtual environment.

	ctrl-c
	python3 -m pip install --upgrade pip
	pip -V


To check which shell you are using:

	echo $SHELL

If your shell is zsh, open .zshrc in your home directory. Add at the end of the file:

	export PATH="/Users/Library/Python/3.9/bin:$PATH"

Replace with the actual path where your python pip scripts are located.

Close the current and open a new terminal window for the updated configuration.
Type `echo $PATH` to verify.


## Conda

View a list of your conda environments.
If none are found, [download from Anaconda.com](https://www.anaconda.com/download) - Open by clicking the Anaconda app. Reopen your terminals.

	conda env list  

A new install places at:
base * /opt/anaconda3

You can delete any unnecessary ones with `conda remove --name [ENV_NAME] --all`  

You can click your Anaconda app to upgrade, then reopen your terminals.
Or you can try using a cmd to upgrade, but you may need to download.

	conda update -n base -c defaults conda

[Download Anaconda](https://www.anaconda.com/download)

To open, run in the folder containing the .ipynb files you're editing.

	jupyter notebook


## Docker

[Docker download](https://www.docker.com) - Install and you'll see an elephant icon

If the docker cmd is not recognized after installing Docker on a Mac, Create a symbolic link. Then confirm with `docker --version`

	sudo ln -s /Applications/Docker.app/Contents/Resources/bin/docker /usr/local/bin/docker

<!--
On a Mac, if the `docker` cmd is not recognized, go to your **Users\\[username]** folder and edit one of these hidden files corresponding to your command terminal instance: .zshrc, .bash_profile, .bashrc or .profile. Add the path `$HOME/.docker/bin` with these:

	export PATH="/usr/local/bin:$PATH"
	export PATH="$HOME/.docker/bin:$PATH"
-->

If you're transitioning from an old instance of [Docker](https://www.docker.com), you may need to reinstall or do a Docker reboot.

<!--
	docker --version
	docker which


Removed these from end of .zshrc
First maybe from ChatGPT.

export PATH="/usr/local/bin:$PATH"
export PATH="$HOME/.docker/bin:$PATH"

export PATH="$HOME/.docker/bin:$PATH"
-->

<!--
My machine has four found:

/Users/X/opt/anaconda3
/Users/X/opt/anaconda3/envs/myenv
base  *  /opt/anaconda3
myenv    /opt/anaconda3/envs/myenv



I ran the new install script in the root of the projects folder with no addition venv
bash location/setup/script/start.sh

After about 8 minutes, it got to the backend install and returned a line 20 error:

/etc/profile.d/conda.sh: No such file or directory

-->



<!--
Probably not needed:

Run if your version of conda won't update on your Mac. [source](https://stackoverflow.com/questions/75988022/conda-wont-update-on-macos)

	brew install python &&
	conda install -n base -c defaults 'conda>=24.3.0'

For the python install, you may also need to run:

	xcode-select --install

Type "python" followed by hitting tab key to see your python versions.

Make python3.12 (or a newer version) the main version on your system:

https://stackoverflow.com/questions/74343871/how-do-i-fix-my-python-version-showing-up-in-terminal

	# If you already have a python sym-link or binary file there, rename it
	sudo mv /usr/local/bin/python /usr/local/bin/python-

	# create sym-link to python3.11
	sudo ln -s `which python3.12` /usr/local/bin/python

	# check the version
	python --version
-->

<!--

After running brew install python

Says 3.12, but python --version returns 3.8.5

==> No broken dependents to reinstall!
==> Caveats
==> python@3.12
Python has been installed as
  /usr/local/bin/python3

Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
  /usr/local/opt/python@3.12/libexec/bin

See: https://docs.brew.sh/Homebrew-and-Python
==> pipx
zsh completions have been installed to:
  /usr/local/share/zsh/site-functions
==> postgresql@14
This formula has created a default database cluster with:
  initdb --locale=C -E UTF-8 /usr/local/var/postgresql@14
For more details, read:
  https://www.postgresql.org/docs/14/app-initdb.html

To start postgresql@14 now and restart at login:
  brew services start postgresql@14
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/postgresql@14/bin/postgres -D /usr/local/var/postgresql@14
 -->
