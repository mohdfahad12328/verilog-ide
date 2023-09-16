#### steps to dev server

- clone repo
`git clone --recurse-submodules https://github.com/mohdfahad12328/fliplot.git`

- for waveform viewer server
  - change directory to fliplot
    `cd fliplot`
  - install npm packages
    `npm i`
  - bundle js
    `npx webpack --mode=development --watch`
  - create and activate a new python virtual-environment (optional):
    `python3 -m  virtualenv .venv` or `python3 -m  venv .venv`
  - activate python virtual-environment
    `./.venv/bin/activate` or `./.venv/Scripts/activate`
  - install flask server
    `pip install flask`
  - run dev server 
    `python3 flask_app.py`

- for verilog-ide
  - install npm packages
    `npm i`
  - run dev server
    `npm run dev`
