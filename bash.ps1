#Set-ExecutionPolicy RemoteSigned
[void][System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")

$foldercopy     = get-childitem "C:\Users\administrator.NB\Documents\github\angular" | where {$_.PSIsContainer -eq 'true'} |
                  Out-GridView -Title "Pick Project to copy" -PassThru

$newProjectName = read-host "Enter NewProject name"

try {
    copy-item $foldercopy.FullName -Destination "$($foldercopy.parent.FullName)\$newProjectName" -Recurse -ErrorAction Stop
    $done = [System.Windows.Forms.Messagebox]::Show("Copy completed successfully.", "Job's Done")
}
catch {
    $fail = [System.Windows.Forms.Messagebox]::Show("An error occured copying the foler.", "Warning")
}