i=0

Do

DataTable.Value("Value", dtGlobalSheet)="test"&i

DataTable.SetNextRow

i=i+1

msgbox i

Loop until i=3

DataTable.SetCurrentRow 2
