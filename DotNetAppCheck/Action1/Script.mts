'################################################################################
'Block of code to test using OR
'################################################################################
'SwfWindow("Standard Controls .NET").SwfTab("tabControl1").Select "CheckBox" @@ hightlight id_;_6755796_;_script infofile_;_ZIP::ssf1.xml_;_
'SwfWindow("Standard Controls .NET").SwfCheckBox("checkBox1").Set "ON" @@ hightlight id_;_530838_;_script infofile_;_ZIP::ssf2.xml_;_
'SwfWindow("Standard Controls .NET").SwfTab("tabControl1").Select "ComboBox" @@ hightlight id_;_6755796_;_script infofile_;_ZIP::ssf3.xml_;_
'SwfWindow("Standard Controls .NET").SwfComboBox("comboBox1").Select "Opt 1" @@ hightlight id_;_394924_;_script infofile_;_ZIP::ssf4.xml_;_
'SwfWindow("Standard Controls .NET").WinEdit("Edit").Set "Opt 1" @@ hightlight id_;_526172_;_script infofile_;_ZIP::ssf5.xml_;_
'SwfWindow("Standard Controls .NET").SwfTab("tabControl1").Select "SwfList" @@ hightlight id_;_6755796_;_script infofile_;_ZIP::ssf6.xml_;_
'SwfWindow("Standard Controls .NET").SwfListView("listView1").Select "item 0" @@ hightlight id_;_590910_;_script infofile_;_ZIP::ssf7.xml_;_
'SwfWindow("Standard Controls .NET").SwfButton("Exit").Click @@ hightlight id_;_3411522_;_script infofile_;_ZIP::ssf8.xml_;_

'################################################################################
'Block of code to test using descriptive programming
'################################################################################
For Iterator = 1 To 20
	SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").SwfTab("swfname:=tabControl1").Select "CheckBox"
	SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").SwfCheckBox("swfname:=checkBox1").Set "ON" @@ hightlight id_;_530838_;_script infofile_;_ZIP::ssf2.xml_;_
	SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").SwfTab("swfname:=tabControl1").Select "ComboBox" @@ hightlight id_;_6755796_;_script infofile_;_ZIP::ssf3.xml_;_
	SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").SwfComboBox("swfname:=comboBox1").Select "Opt 1" @@ hightlight id_;_394924_;_script infofile_;_ZIP::ssf4.xml_;_
	SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").WinEdit("nativeclass:=Edit").Set "Opt 1" @@ hightlight id_;_526172_;_script infofile_;_ZIP::ssf5.xml_;_
	SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").SwfTab("swfname:=tabControl1").Select "SwfList" @@ hightlight id_;_6755796_;_script infofile_;_ZIP::ssf6.xml_;_
	SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").SwfListView("swfname:=listView1").Select "item 0" @@ hightlight id_;_590910_;_script infofile_;_ZIP::ssf7.xml_;_
Next
SwfWindow("swfname:=Form1","regexpwndtitle:=Standard Controls .NET Sample Application").SwfButton("swfname:=button1").Click
