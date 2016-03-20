
# Installation
1. Clone the repository: 
    `git clone https://github.com/mushdigital20/flikr-search.git`

2. Change folder
    `cd flikr-search`

2. Install Dependencies (Good time for a cup of tea)
    `npm i && bower i`

3. Build Source Files
    `gulp prod` after the sequence runs, the javascript files take a few seconds to become available in the destination folder.

4. Start the server
    `DEBUG=server:* node ./server/bin/www`
    
5. Browse `http://localhost:3000`

## Tests
gulp test

## Live Demo (AWS)
http://ec2-52-23-174-8.compute-1.amazonaws.com:3000
