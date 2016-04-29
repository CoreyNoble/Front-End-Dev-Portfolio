<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact | Corey Noble</title>
    <link rel="icon" type="image/jepg" href="http://www.corey-noble.com/favicon.jpg">

    <!-- Relative CSS / Javascript -->
    <link rel="stylesheet" href="assets/css/app.css" />
    <link rel="stylesheet" href="assets/css/animate.css" />
    <script src='https://www.google.com/recaptcha/api.js'></script>
  </head>
  <body>

    <!-- Navigation Menu -->
    <?php include("partials/navigation.html"); ?>

    <div id="parallax-hero-1" class="parallax" data-stellar-background-ratio="0.4" >
      <h1 class="zoomInDown wow">Contact<br><hr><small>Corey Noble | 2016</small></h1>
    </div>

    <div class="section black">
      <div class="row">
        <div class="large-7 medium-7 small-12 columns">
          <h2>I look forward to hearing from you!</h2>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="../..#" class="small radius button right">Radius Button</a>
        </div>

        <div class="large-5 medium-5 small-12 columns">
          <form method="post" action="mailsend.php">
            <div class="row">
              <h5>First Name</h5>
              <input type="text" name="firstName" required />
              <h5>Last Name</h5>
              <input type="text" name="lastName" required />
              <h5>Email Address</h5>
              <input type="text" name="email" required />
              <h5>Company</h5>
              <input type="text" name="company" required />
              <h5>Inquiry</h5>
              <textarea class="last" name="inquiry" rows="5" cols="35" required></textarea>
              <div class="g-recaptcha" data-sitekey="6Leroh4TAAAAADw3rEA7sZZRliomxJuRNFq4xFtV"></div>
              <input type="submit" class="button submit-cta" value="Sign me up"/>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <?php include("partials/footer.html"); ?>

    <!-- Scripts -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/wow.js"></script>
  </body>
</html>
