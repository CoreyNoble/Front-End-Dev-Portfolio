<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact | Corey Noble</title>
    <link rel="icon" type="image/jpeg" href="http://www.corey-noble.com/favicon.jpg" />
    <link rel="canonical" href="http://corey-noble.com/contact" />

    <!-- Relative CSS / Javascript -->
    <?php include("http://www.corey-noble.com/partials/head.html"); ?>
    <script src='https://www.google.com/recaptcha/api.js'></script>
  </head>
  <body>

    <!-- Navigation Menu -->
    <?php include("http://www.corey-noble.com/partials/navigation.html"); ?>





<!-- CONTACT HEADER -->
    <div id="parallax-hero-2" class="parallax-large" data-stellar-background-ratio="0.4" >
      <h1 class="zoomInDown wow">Contact Me</h1>
    </div>





<!-- CONTACT MESSAGE -->
    <div class="section black">
      <div class="row">
        <div id="contact-intro" class="large-12 medium-12 small-12 columns">
          <h2 id="no-captcha">I look forward to hearing from you!</h2>
          <h5>Thank you for showing interest in me as a developer. I am excited to start working with you! Please fill out the form below so we can begin a conversation.</h5>
          <?php
            if (strpos($_SERVER['REQUEST_URI'], "captcha=none") !== false){ ?>
              <h3 style="color: red; font-weight: bold; margin-top: 1em; text-decoration: underline;">Please validate yourself with Google ReCaptcha.</h3>
          <?php } ?>
          <?php
            if (strpos($_SERVER['REQUEST_URI'], "captcha=failed") !== false){ ?>
              <h3 style="color: red; font-weight: bold; margin-top: 1em; text-decoration: underline;">You have failed Google ReCaptcha validation. Please try again.</h3>
          <?php } ?>
        </div>





<!-- CONTACT FORM -->
        <div id="contact-form" class="large-12 medium-12 small-12 columns">
          <form method="post" action="mailsend.php" method="post">
            <div class="row fadeIn wow">
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

              <div class="no-padding large=8 medium-8 small-12 columns" style="margin-top: 1.5em">
                <div class="g-recaptcha" data-sitekey="6Lcj8wYUAAAAAG9fl2DtDnsqTjfyNFwhL38TwGao"></div>
              </div>

              <div class="no-padding large=4 medium-4 small-12 columns" style="margin-top: 1.5em;">
                <input type="submit" class="button submit-cta" value="Submit"/>
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
