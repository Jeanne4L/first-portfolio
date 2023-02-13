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
                <div style="max-width:600px;">
                    <p>
                        '.$message.'
                    </p>
                    <br>
                    <p style="margin-bottom:0;">
                        '.$name.'
                    </p>
                    <a href="mailto:'.$email.'">
                        '.$email.'
                    </a>
                </div>
            </body>
        </html>';
    
    $headers = 'MIME-Version: 1.0'. "\r\n".
                'Content-type: text/html; charset=utf-8' . "\r\n".
                'From :'.$_POST['name']. "\r\n".
                'Reply-To : '.$_POST['email']. "\r\n";
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>
            Sandra Petereau - Message
        </title>
        <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">

        <link rel="stylesheet" href="../style.css">
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    </head>

    <body class="form-res">
        <main class="bgc-gradient">
            <header>
                <div class="container">
                    <a href="../index.html">
                        <img src="../images/logo.png" alt="logo abstrait représentant la polyvalence" srcset="../images/logo.svg">
                    </a>
                </div>
            </header>
            
            <p>
                <?php
                    if(mail($to, $subject, $message, $headers)) {
                        echo 'Message envoyé ! Je vous recontacte au plus vite, à bientôt !';
                    } else {
                        echo 'Une erreur est survenue, vous pouvez toujours me contacter via l\'enveloppe en bas de page. À bientôt !';
                    }
                ?>
            </p>

            <div class="shine-container-btn shine-container-btn--circle" role="button">
                <div class="border-btn border-btn--circle">
                    <div class="btn btn--circle">
                        <a href="../index.html">
                            retour à la page principale
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <footer class="center">
            <a href="https://github.com/Jeanne4L" target="_blank">
                <i class="ri-github-fill"></i>
            </a>
            <a href="mailto:sandra.petereau@outlook.fr">
                <i class="ri-mail-fill"></i>
            </a>
        </footer>
    </body>
</html>