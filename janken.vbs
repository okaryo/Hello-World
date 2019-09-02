Dim te(2)
te(0) = "gu-"
te(1) = "choki"
te(2) = "pa-"

kachi = 0

Randomize

MsgBox "Janken Game ver.1.00 by okaryo"

For i = 1 To 5
  user = CInt(InputBox("0:gu-, 1:choki, 2:pa-"))
  computer = CInt(Rnd * 2)
  s = "user:" & te(user) & ", computer:" & te(computer)

  If user = computer Then
    MsgBox s & "... aiko!"
  ElseIf computer = (user + 1) Mod 3 Then
    MsgBox s & "... user win!"
    kachi = kachi + 1
  Else
    MsgBox s & "... computer win!"
  End If
Next

MsgBox "count of win:" & kachi