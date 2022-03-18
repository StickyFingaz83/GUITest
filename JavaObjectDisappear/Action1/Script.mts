Dim varParent, arrItems, varItem, objItem, y
Dim dscTwistie
Set objItem = JavaWindow("SwingSet")

Set dscTwistie = Description.Create
dscTwistie.Add "path", "MetalInternalFrameTitlePane.*"
dscTwistie.Add "toolkit class", "javax.swing.plaf.metal.MetalInternalFrameTitlePane"
dscTwistie("Class Name").Value="JavaObject"
dscTwistie("displayed").Value = "1"
dscTwistie("enabled").Value = "1"
Set y= objItem.ChildObjects(dscTwistie)
For  i = 0 to  y.Count -1 
    y.item(i).click 1,1
    Wait 1
Next
For  i = 0 to  y.Count -1 
       If y.item(i).Exist(0) Then
            y.item(i).click 1,1
        Else
            Msgbox "Disappeared"
       End If
    Wait 1
Next
