# Anime List
A React app to show my Anime list.

## Requirments:
* `python3`
* `node-js`

## Installing Requirments if miising:
* `apt install python3-pip3`
* `apt install nodejs`
* `apt install npm`

## If you wish to create yours follow Bellow:
First Clone this repository:
* `git clone https://github.com/laraib-sidd/anime-list.git`

## Setting up your own project:
* Create a New Github repository.
* Clone Your repository using `git clone {Your github Url}`
* Copy all the data from my the `anime-list` folder to your Git Folder.
* After copying the data you can Delete the `anime-list` folder.

## Now Set-up the enviroment
* `cd {to the git repository location}`
* `npm install`
* `pip3 install -r requirments.text`

### If you run into any errors with `npm`:
* `npm audit fix`

## Once the enviroment is set, you can run the demo version by:
* `npm start`

## Get your own list from MyAnimeList Website:
* Go to your Myanimelist page.
* Click on export.
* Click on Save.
* Extract the file.
* Rename it as `anime.xml`.
* Copy the file into `anime-list\src\Containers\`

## Getting your data ready:
* Go to the project directory.
* Run `npm run data`

## If you have Mananged till here, your website can run on localhost.
* Run `npm start`

# Deployment

## Using Github Pages:
* Run `npm run deploy`
* Now go to your github page you can find the link to your anime list website there.

## Using Netlify
* Run `npm run build`
* Now an optomized version of your website is formed in the `build` folder
* Login to your Netlify  Account.
* Go to site section.
* Drag and drop the build folder.
* Click on publish.
* You Website is Published.

