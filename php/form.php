

<?php
    $to = 'sandra.petereau@outlook.fr';
    $subject = 'Prise de contact depuis le portfolio';
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $message = strip_tags($_POST['message']);
    $message = wordwrap($message, 70, "\r\n");
    $message = '
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Contact depuis le portfolio</title>
            </head>
            <body>
                <div id="email-wrap" style="max-width:600px;">
                    <p style="font-size:17.6px;">
                        '.$message.'
                    </p>
                    <br>
                    <p style="font-size:17.6px; margin-bottom:0;">
                        '.$name.'
                    </p>
                    <a href="mailto:'.$email.'" style="font-size:16px;">
                        '.$email.'
                    </a>
                </div>
            </body>
        </html>';
    
    $headers = 'MIME-Version: 1.0'. "\r\n".
                'Content-type: text/html; charset=utf-8' . "\r\n".
                'From :'.$_POST['name']. "\r\n".
                'Reply-To : '.$_POST['email']. "\r\n";
    
    
    if(mail($to, $subject, $message, $headers)) {
        echo 'Message envoyé ! Je vous recontacte au plus vite, à bientôt !';
    } else {
        echo 'Une erreur est survenue, vous pouvez toujours me contacter via l\'enveloppe en bas de page. À bientôt !';
    }
?>

