// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"dmv-core","status":true,"description":"DMV_Core contains functions that are used within some of\nthe more advanced RPG Maker MV plugins of mine.","parameters":{}},
{"name":"dmv-destination_sprite","status":true,"description":"Alters the 'destination sprite' (shown when you click to move).","parameters":{"Bitmap Name":"destination-sprite","Bitmap Frames":"2","Frame Frequency":"15","Sprite Blend":"1","Angle Change":"5","Alpha Mod":"10","Alpha Min":"50","Alpha Max":"200","Can Scale Div":"true","Scale Div":"125"}},
{"name":"dmv-full_keyboard_input","status":true,"description":"This plugin enhances the default Input class to allow for\nthe checking of all keyboard keys.","parameters":{}},
{"name":"dmv-heal_on_level_up","status":true,"description":"Allows for HP and MP to heal upon level up.","parameters":{"Gain Type":"diff","Can Gain HP":"true","Can Gain MP":"true","HP Perc":"10","MP Perc":"10"}},
{"name":"dmv-kursor_blink","status":true,"description":"This simple plugin allows the default window cursor\n'blink' speed to be modified, or even completely stopped!","parameters":{"Kursor Blink Speed":"0.25","Kursor Blink Min":"0.0","Kursor Blink Max":"2.0","Kursor Options":"true"}},
{"name":"dmv-map_buttons","status":true,"description":"This plugin allows for the game map screen to show some\ncool menu buttons that run user defined code upon trigger.","parameters":{"Button 1 Data":"466, 2, 320, 336, 1","Button 1 Func":"SceneManager.push(Scene_Item)","Button 2 Data":"500, 2, 321, 337, 1","Button 2 Func":"$gameParty.setMenuActor($gameParty.leader());SceneManager.push(Scene_Skill)","Button 3 Data":"534, 2, 322, 338, 1","Button 3 Func":"$gameParty.setMenuActor($gameParty.leader());SceneManager.push(Scene_Equip)","Button 4 Data":"568, 2, 323, 339, 1","Button 4 Func":"$gameParty.setMenuActor($gameParty.leader());SceneManager.push(Scene_Status)","Button 5 Data":"602, 2, 324, 340, 1","Button 5 Func":"SceneManager.push(Scene_Options)","Button 6 Data":"636, 2, 325, 341, 1","Button 6 Func":"SceneManager.push(Scene_Save)","Button 7 Data":"670, 2, 326, 342, 1","Button 7 Func":"SceneManager.push(Scene_GameEnd)","Button 8 Data":"-1, -1, 0, 0, 0","Button 8 Func":"null","Button 9 Data":"-1, -1, 0, 0, 0","Button 9 Func":"null","Button 10 Data":"-1, -1, 0, 0, 0","Button 10 Func":"null","Button 11 Data":"-1, -1, 0, 0, 0","Button 11 Func":"null","Button 12 Data":"-1, -1, 0, 0, 0","Button 12 Func":"null","Button 13 Data":"-1, -1, 0, 0, 0","Button 13 Func":"null","Button 14 Data":"-1, -1, 0, 0, 0","Button 14 Func":"null","Button 15 Data":"-1, -1, 0, 0, 0","Button 15 Func":"null","Button 16 Data":"-1, -1, 0, 0, 0","Button 16 Func":"null","Button 17 Data":"-1, -1, 0, 0, 0","Button 17 Func":"null","Button 18 Data":"-1, -1, 0, 0, 0","Button 18 Func":"null","Button 19 Data":"-1, -1, 0, 0, 0","Button 19 Func":"null","Button 20 Data":"-1, -1, 0, 0, 0","Button 20 Func":"null","Button 21 Data":"-1, -1, 0, 0, 0","Button 21 Func":"null","Button 22 Data":"-1, -1, 0, 0, 0","Button 22 Func":"null","Button 23 Data":"-1, -1, 0, 0, 0","Button 23 Func":"null","Button 24 Data":"-1, -1, 0, 0, 0","Button 24 Func":"null","Button 25 Data":"-1, -1, 0, 0, 0","Button 25 Func":"null"}},
{"name":"dmv-rare_candies","status":true,"description":"Alters the 'destination sprite' (shown when you click to move).","parameters":{"Rare Candy Tag":"rare_candy"}},
{"name":"dmv-screenshot_downloader","status":true,"description":"This plugin simply triggers a download of the game screen\nas an image file when the 'print screen' key is pressed.","parameters":{"screenshot-prepend":"demoscreenshot_"}},
{"name":"dmv-skip_title","status":true,"description":"This plugin simply allows for the title scene to be skipped.","parameters":{}},
{"name":"dmv-stat_crit_dmg_rate","status":true,"description":"Allows more control over critical damage calculation.","parameters":{"Default CDR Funk":"1.5"}},
{"name":"dmv-stat_damage_levels","status":true,"description":"This plugin creates a bunch of new attack and defence\nrelated stats which can also be used in skill formulas.","parameters":{"-- Attack Level Stats --":"","ATL Form":"this.level","CAL Form":"0","PAL Form":"0","MAL Form":"0","SAL Form":"0","-- Defence Level Stats --":"","DFL Form":"this.level","CDL Form":"0","PDL Form":"0","MDL Form":"0","SDL Form":"0"}},
{"name":"dmv-stat_human_instincts","status":true,"description":"Creates statistics with the characteristics of human instincts.","parameters":{"Enable For All":"true"}},
{"name":"dmv-stat_param_distribute","status":true,"description":"Allows for parameters to be 'distributed' via the status\nscene and the new distribution window.","parameters":{"--- ACTOR SETTINGS ---":"","Default Min Values":"1, 1, 1, 1, 1, 1, 1, 1","Default Modifiers":"9.5, 9.5, 2, 2, 2, 2, 2, 2","Max Distribution Points":"this.level * 8 + 8;","--- WINDOW SETTINGS ---":"","Regular Window Data":"768, 264, 47, 162, 128","Toggled Window Data":"485, 264, 330, 162, 255","--- TEXT SETTINGS ---":"","Points Text Data":"32, 0","MHP Text Data":"30, 32, 32","MMP Text Data":"64, 32, 32","ATK Text Data":"98, 32, 32","DEF Text Data":"132, 32, 32","MAT Text Data":"166, 32, 32","MDF Text Data":"200, 32, 32","AGI Text Data":"234, 32, 32","LUK Text Data":"268, 32, 32","--- STAT UP BUTTONS ---":"","MHP Up Button Data":"48, 80","MMP Up Button Data":"82, 80","ATK Up Button Data":"116, 80","DEF Up Button Data":"150, 80","MAT Up Button Data":"184, 80","MDF Up Button Data":"218, 80","AGI Up Button Data":"252, 80","LUK Up Button Data":"286, 80","--- STAT DOWN BUTTONS ---":"","MHP Down Button Data":"48, 114","MMP Down Button Data":"82, 114","ATK Down Button Data":"116, 114","DEF Down Button Data":"150, 114","MAT Down Button Data":"184, 114","MDF Down Button Data":"218, 114","AGI Down Button Data":"252, 114","LUK Down Button Data":"286, 114"}},
{"name":"dmv-stat_param_limit_break","status":true,"description":"Allows for actor/enemy parameter limits to be broken.","parameters":{"-- actor --":"","Actor MaxHP":"99999","Actor MaxMP":"99999","Actor MaxAtk":"9999","Actor MaxDef":"9999","Actor MaxMat":"9999","Actor MaxMdf":"9999","Actor MaxAgi":"9999","Actor MaxLuk":"9999","-- enemy --":"","Enemy MaxHP":"9999999","Enemy MaxMP":"9999999","Enemy MaxAtk":"99999","Enemy MaxDef":"99999","Enemy MaxMat":"99999","Enemy MaxMdf":"99999","Enemy MaxAgi":"99999","Enemy MaxLuk":"99999","-- other --":"","Other MaxHP":"99","Other MaxMP":"99","Other MaxAtk":"9","Other MaxDef":"9","Other MaxMat":"9","Other MaxMdf":"9","Other MaxAgi":"9","Other MaxLuk":"9"}},
{"name":"dmv-stat_willpower","status":true,"description":"Creates new stats: will, and willrt. (willpower & rate)\nSee Help for more information--","parameters":{"Default Will Funk":"(this.willrt/2)+(this.will/1000)"}},
{"name":"dmv-timer_wait_for_event","status":true,"description":"This plugin allows the game timer to wait for events.","parameters":{"Default Wait":"true"}},
{"name":"dmv-zelda_hud","status":true,"description":"This plugin simply creates a small HP HUD inspired by Zelda.","parameters":{"Heart Image":"ZeldaHeart by Avery","Heart Scale":"0.35","HUD Position":"0, 0","Init Shown":"3","Min Shown":"3","Max Shown":"9"}},
{"name":"dmv-online_highscores","status":true,"description":"This plugin allows for customizable highscore lists to be \r\nshown within your RPG Maker Mv Project.","parameters":{}}
];
