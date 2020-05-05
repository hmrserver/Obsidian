![alt tag](https://raw.githubusercontent.com/hmrserver/Obsidian/master/obsidian.png)
## Obsidian Theme - BETA

**NOTE!!!!** : Since, This is still in BETA stage. You may need to check out everytime when you got time. We won't releasing version. So to get latest version. Always keep checking this repository. Report any problem in this github issues. But, you can also join our discord channel to talk more about this or for giving us feedbacks! Enjoy.

**What is Obsidian Theme ?**

Obsidian Theme is a Dark and lightweight theme for Open Game Panel which allows admins to do customization of the style of Open Game Panel and make your own game panel more professional.<br>
Currently this theme is on its **BETA** stage, so their might have some bugs. Users requested to report them in our discord server, at this github repository issues, or at our theme thread of open game panel forum. So this theme can be further be improved. Final release will come later.

Crafted by **HMR Team**.<br />
Join our official discord channel to follow our development or to talk more about us : https://discord.gg/Tk8zbdR

## Custom License:
>
1. User may edit the item, but can't replace My Theme Copyright & OGP Copyright.
2. User can't re-distribute the theme's copy for free or paid.
3. User should not copy any feature of this item.
4. User need confirmation with us before taking theme as business and removing copyright mark (footer, header component, etc.).
5. User can't expose decrypted files publically.

-----------------------

## For Installation, Follow the steps below:

#### Requirements:
>
1. Your OGP panel must of latest version.
2. You Must have full controls on the OGP panel's File.
3. Your OGP Panel atleast have 7-10 MB Disk space.

#### Installation Steps:
>
Download the lastest version from [HERE](https://github.com/hmrserver/Obsidian)<br />
If you already downloaded. Progress to next instruction as what you want to finish<br />
>
1. Extract the zip file.
2. Copy everything inside the folder, navigate to your OGP Panel's root theme folder and paste there.
3. Once the pasting process completes, login to your OGP Panel.
4. Navigate to Administration > Theme Settings, Change the theme to Obsidian and save it.
5. That's all, now you would have Obsidian Theme in it. ENJOY!

-----------------------

## Customization

### Profile Image (Concept)
>
![alt tag](https://i.imgur.com/XnUlWEt.png)<br>
In this theme we have an exclusive feature called **"Avatar/ProfileImage"** System, which saves users avatar/images at web host(i.e at "../themes/Obsidian/upload") which this will save your Avatar and will be able to load by your current username. For users who want to have their Avatar.

There is an admin tool that you can set called **"Avatar max limit size"**. This enable admins to setup a maximum specific size (in bits) which user's are not allowed to upload their avatars beyond the limit size. Only Admin can customize it. For setting it up, Please go to **../upload/upload.php**. Open with your text-editor, I recommend you to use __Atom__ which is available to Windows & Linux. Then, Go to 4th code line. And Replace the value of *"max_image_size"* within your own specific size. Ex :
```
$max_image_size = 2048; // in KB (2 MB = 2048 KB)
```

For Usage. Please, Follow the step below :<br>
1. First, Make sure you already logged in with any of your account.
2. Then, If Sidebarmenu hasn't expanded yet. try to expand it by click/touch the "3 lines".
3. So, You will be able to see the profile image, You can upload your own image.
4. Camera Icon for upload. Trash Icon for remove your icons.

**NOTE :** If it isn't saving then probably its because of the insufficient permission given to the upload folder(recommended to be 777). For setting the proper permission to the folder just open your webhost's SSH and execute the command mentioned below:
```
chown -Rf www-data:www-data /var/www/
```

### Welcome Message
>
![alt tag](http://puu.sh/xLKbi/b7f8a10d75.png)
It's cool, right? You can add your welcome message, too! Just follow the steps, below :<br>
1. Simply, You need to have admin's rights. Try login with your admin account
2. Then, Go to Administraion > Theme Settings.
3. After that, Navigate to "Theme Settings" and make sure "Welcome Title" setsON.
4. Then, you can change the default Welcome Messages, to your own messages
5. Lastly, If you want to have same label notification. you need to write codes, below here
```
<div class="callout"><span>Welcome!</span><p>You can change this title in '<b>Theme Settings</b>' under the '<b>Administration</b>' tab.</p></div>
```
### Favicon, Login Background Image, Background Blur Effect, Logo, Loading Bar.
>
![alt tag](https://i.imgur.com/yRZr9Rf.png)
"Little Addition ? meh, i guess so. But at least, You can customize for sure. Continue for Tutorials!"<br>
1. Simply, You need to have admin's rights. Try login with your admin account.
2. Go to Administraion > Theme Settings.
3. Navigate to "Extras Options"<br>
4. Change the default settings to your personalization
5. Make sure, you located the files correctly. Ex. ("themes/Obsidian/images/bg.jpg")
6. I can't explain much for more details. Just try save and see your own result :).
