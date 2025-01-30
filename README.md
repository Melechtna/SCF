# Simple Controller Framework (SCF)

SCF, as it's name implies, is a framework written with the html5-gamepad API to allow you to create a standalone, green screen'd window that you can add to softwares like OBS so that your input can be displayed. The main reason I created this framework is two fold, one, to handle Flatpak issues where the controller can't be seen by the API, and two, so that you can easily import any controller you want, and have it look like your ACTUAL controller.

The code is as human readable as possible, so that it should be as simple as possible to understand what does what, and what needs changing to fit your controller, if anything. There will be multiple examples provided, including some non-standard ones, and I will be adding as many as I have access too.

# Structure

The sctructure should be as follows, controller folder, manufacturer folder, model folder, color folder (if applicable), images, and scripts folder.

## Controllers

The controllers folder will contain sub folders for each respective manufacturer.

## Manufacturer

The Manufacturer folder(s) will contain a subfolder with the controllers respective model name as its own folder, if this is the end of the line (EotL), the index.html will go in here.

## Colors

The Colors folder(s), if applicable, will contain the coloration for each respective coloration for that respective model for that respective controller. If this is the end of the line (EotL), the index.html will go in here.

## images, and scripts

These two folders will be the ones that actually contain the "meat" of what makes up the controller itself, the images folder is what actually makes up your controller, as well as the icon for the site, there will be a base image, and an image for each and every button that makes up the controller. It's usually best to start with the base and any floating buttons you may need to display the entire controller. It's best if you can keep everything "small", by this I mean, if you can get away with using less space, do so, but every image needs to be the same resolution, but the majority of each buttons canvas should be transparent, see premade controllers for examples.

You will also want to create pressed states for the buttons, see any of the premade controllers for examples which are designated with the ending letter P, before the png extension. This allows the code to be efficent, by simply swapping these images out. It also makes it very easy for anyone to simply change the color of the pressed state with a fill tool in just about any image editor imaginable, to get their desired color. Lastly is the scripts folder, the only thing that goes here is renderer.js, this script does all the heavy lifting.

# Creating your own

For the most part, the process to create the images is quite simple, it's just tedious, and I will be checking any submissions to meet "minimum quality", basically this just means, you bothered to take the time to make the buttons properly detached, aligned the floating buttons/triggers well enough, that sort of thing, not say, you merely square cut the buttons out and slapped some paint over the buttons or something like that.

Where it may get a bit challenging, is properly editing the index.html to properly reflect the controller, its icon, and pointing it towards the correct button images to pass to the renderer. The renderer itself is where it gets the most complicated, and there's no easy "do this" recommendation, as it will largely depend on the controller itself and what's required to make it work. Your best bet is to look at the pre-made examples, and work things out yourself, or, if you can either send me the controller, or are more willing to work with me on debugging it, I may be able to do so myself given the time.

# Debugging
I have recently added a simple true false toggle debug mode. This will help not only myself add new controllers, but anyone else wishing to addon to this framework. It provides every ounce of data you need to setup the controller using the existing frameworks code. At this point, you could use the GameSir as a base for practically anything, and the debug info to then properly configure whatever else you want to. The exception being buttons that aren't really mappable under normal circumstances, like with the plethora the GameSir Tarantula has.

# Running

Simply locate the folder of the controller you want, and open index.html found in that controllers respective EotL, in any web browser that has html5-gamepad enabled, which should be most besides Firefox from my experience, this of course is subject to change, as Firefox may add this later.
