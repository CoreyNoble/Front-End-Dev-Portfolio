<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact | Corey Noble</title>
    <link rel="icon" type="image/jpeg" href="http://www.corey-noble.com/favicon.jpg" />

    <!-- Relative CSS / Javascript -->
    <link rel="stylesheet" href="http://www.corey-noble.com/assets/css/app.css" />
    <link rel="stylesheet" href="http://www.corey-noble.com/assets/css/animate.css" />
    <script src="http://www.corey-noble.com/bower_components/modernizr/modernizr.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
  </head>
  <body>

    <!-- Navigation Menu -->
    <?php include("http://www.corey-noble.com/partials/navigation.html"); ?>

    <div id="parallax-hero-2" class="parallax" data-stellar-background-ratio="0.4" >
      <h1 class="zoomInDown wow">Contact Me</h1>
    </div>

    <div class="section black">
      <div class="row">
        <div id="contact-intro" class="large-12 medium-12 small-12 columns">
          <h2>I look forward to hearing from you!</h2>
          <h5>Thank you for showing interest in me as a developer. I am excited to start working with you! Please fill out the form below so we can begin a conversation.</h5>
        </div>

        <div id="contact-form" class="large-12 medium-12 small-12 columns">
          <form method="post" action="http://www.corey-noble.com/mailsend.php">
            <div class="row">
              <h5 class="fadeIn wow">First Name</h5>
              <input class="fadeIn wow" type="text" name="firstName" required />

              <h5 class="fadeIn wow">Last Name</h5>
              <input class="fadeIn wow" type="text" name="lastName" required />

              <h5 class="fadeIn wow">Email Address</h5>
              <input class="fadeIn wow" type="text" name="email" required />

              <h5 class="fadeIn wow">Company</h5>
              <input class="fadeIn wow" type="text" name="company" required />

              <h5 class="fadeIn wow">Inquiry</h5>
              <textarea class="fadeIn wow" class="last" name="inquiry" rows="5" cols="35" required></textarea>

              <div class="no-padding large=8 medium-8 small-12 columns">
                <div class="g-recaptcha fadeIn wow" data-sitekey="6Leroh4TAAAAADw3rEA7sZZRliomxJuRNFq4xFtV"></div>
              </div>

              <div class="no-padding large=4 medium-4 small-12 columns">
                <input class="fadeIn wow" type="submit" class="button submit-cta" value="Submit"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <?php include("http://www.corey-noble.com/partials/footer.html"); ?>

    <!-- Scripts -->
    <?php include("http://www.corey-noble.com/partials/scripts.html"); ?>
  </body>
</html>
