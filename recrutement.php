<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recrutement</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
    <a href="https://icons8.com/icon/pZMQGYf0Z6Yp/code">Code icon by Icons8</a>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

</head>
<body>
    <!-- header section -->

    <header class="header" id="header">
        <nav class="nav container">
            <a href="" class="logo"><img src="./images/LOGO.png" alt=""></a>

            <div class="nav_menu" id="nav-menu">
                <ul class="nav_list">
                    <li class="navitem">
                        <a href="./index.php" class="nav_link active-link">Acceuil</a>
                    </li>
                    <li class="navitem">
                        <a href="./about.php" class="nav_link">A Propos</a>
                    </li>
                    <li class="navitem">
                        <a href="./index.php" class="nav_link">Services</a>
                    </li>
                    <li class="navitem">
                        <a href="./index.php" class="nav_link">Contact</a>
                    </li>
                    <li class="navitem">
                        <a href="#recrutement" class="nav_link">Carrière</a>
                    </li>
                </ul>

                <i class="ri-close-line nav_close" id="nav-close" ></i>
            </div>
            <div class="nav_toggle" id="nav-toggle">
                <i class="ri-menu-3-line"></i>
            </div>
        </nav>
    </header>
    <!-- End header section -->

    <div id="acceuil">
        <section class="ban-recru" id="#banniere">

            <div class="content">
                <h2>Carrière</h2>
            </div>
    
        </section>
    </div>

        <div class="recru">
            <p>
                Teckruns dans sa politique d'ouverture dans le monde, nous participons à aider 
                les entreprises de parts le monde au recrutement de leur différents employés.
                Entreprises, peut importe votre domaine d'expertise contactez nous pour vous 
                faire recruter vos prochains collaborateurs plus besoin de ce casser la tête 
                pour chercher les talents. Nous nous en chargerons pour vous.
            </p>
            <p>
                Réduisez le travail de recrutement. Recrutez votre personnel, rapidement, grâce à nos experts,
                qui vous aident à simplifier le processus. Trouvez des professionnels qualifiés, temporaires et 
                permanents, avec teckruns, une jeunes entreprises des IT, de conseil, infogerance, et recrutement dans le monde
            </p>

            <div class="demandes">
                <button  id="btn1">Vous cherchez un emploi ?</button>
                <button  id="btn2">Vous voulez faire du recrutement ?</button>
            </div>
        </div>

     <!--Contact Section-->
     <section class="contact form1">
        <div class="container"></div>
        <div class="container1">
            <div class="contactform">
                <form action="">
                    <div class="inputbox">
                        <input type="text" name="nom" required="required">
                        <span>Prénom</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" name="nom_entreprise" required="required">
                        <span>Nom</span>
                    </div>
                    <div class="inputbox">
                        <input type="email" name="" required="required">
                        <span>Email</span>
                    </div>
                    <div >
                    <select name="dom" id="" class="selec">
                        <option class="option" value="">Votre domaine de compétence</option>
                        <option class="option" value="technologies">Technologies</option>
                        <option class="option" value="finance">Finance</option>
                        <option class="option" value="marketing">Marketing et communication</option>
                        <option class="option" value="administrations">Administrations</option>
                        <option class="option" value="community manager">Community manager</option>
                    </select>
                    <div class="fic">
                        <h3>Votre CV</h3>
                        <input class="curi" type="file" name="" required="required">
                    </div>
                    
                    <div class="inputbox">
                        <textarea name="" id="" cols="30" rows="10" required="required"></textarea>
                        <span>Votre Message</span>
                    </div>

                    <input type="submit" class="btn" name="" value="Envoyer Message">
                </form>
            </div>
        </div>
    </section>
    <!--End Contact Section-->
     <!--Contact Section-->
     <section class="contact form2">
        <div class="container">
        </div>
        <div class="container1">
            <div class="contactform">
                <form action="">
                    <div class="inputbox">
                        <input type="text" name="nom" required="required">
                        <span>Entreprise</span>
                    </div>
                    <div >
                    <select name="dom" id="" class="selec">
                        <option class="option" value="">Domaine d'activité</option>
                        <option class="option" value="technologies">Technologies</option>
                        <option class="option" value="finance">Finance</option>
                        <option class="option" value="marketing">Marketing et communication</option>
                        <option class="option" value="administrations">Administrations</option>
                    </select>                
                    <div class="inputbox">
                        <textarea name="" id="" cols="30" rows="10" required="required"></textarea>
                        <span>Votre Message</span>
                    </div>

                    <input type="submit" class="btn" name="" value="Envoyer Message">
                </form>
            </div>
        </div>
    </section>
    <!--End Contact Section-->
    <!--footer section-->
    <footer>
           <!-- <h2>Suivez nous sur :</h2> --> 
            
            <nav class="navbar">
                <a href="./index.php" class="nav_link">Accueil</a>
                <a href="./about.php" class="nav_link">A Propos</a>
                <a href="./index.php" class="nav_link">Services</a>
                <a href="./index.php" class="nav_link">Contact</a>
                <a href="#recrutement" class="nav_link">Carrière</a>
            </nav>
            <p>&copy; 2022 Teckruns. Tout Droits Reservés</p>
    </footer>
    <!--End footer section-->

    <!-- scroll up -->
    <a href="" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-line scrollup_icon"></i>
    </a>
   
    <script src="script.js"></script>

</body>
</html>