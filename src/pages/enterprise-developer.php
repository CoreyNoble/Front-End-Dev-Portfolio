<!doctype html>
  <html class="no-js" lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enterprise Developer</title>
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/styles.css">
  </head>

  <body>

    <div class="good">
      <!--- ********* ENTERPRISE DEVELOPER HEADER ********* --->
      <div class="good-header">
        <div class="row">
          <div class="large-12 medium-12 small-12 columns">
            <div class="blackberry-logo">
              <img src="img/BlackBerry_Logo.png" alt="BlackBerry" />
            </div>
            <div class="good-logo">
              <img src="img/Good_Logo.png" alt="Good | Powered by BlackBerry" />
            </div>
          </div>
        </div>
      </div>

      <!--- ********* ENTERPRISE DEVELOPER HERO *********  --->

      <div id="enterprise-developer-hero">
        <div class="row">
          <div class="large-9 medium-9 small-12 columns ">
            <h1>BlackBerry Enterprise<br>Developer Program</h1>
            <h3>Exclusive expertise, at your fingertips.</h3>
          </div>
          <div class="large-3 medium-3 small-12 columns">
            <img src="img/Device_App_icon.png">
          </div>
        </div>
      </div>

      <!--- ********* ENTERPRISE DEVELOPER IT PROFESSIONAL *********  --->

      <div id="enterprise-developer-it-professional">
        <div class="sub-title-1 white">
          <h4>Stay on the leading edge</h4>
        </div>
        <div class="row">
          <div class="large-6 medium-12 small-12 columns">
            <h3 id="it-professional">You’re an IT Professional, experienced in mobile app development. Stay current and build on your expertise with the Enterprise Developer Program.</h3>
            <p>Learn more about cross-platform app development for iOS, Android, BlackBerry and Windows. Get exclusive content on key enterprise mobile app challenges, including data security. BlackBerry is your connection to the latest enterprise developer
              resources – now, and as enterprise mobility continues to evolve.</p>
            <div id="professional-perks">
              <p>Get exclusive news and information, delivered right to your inbox</p>
              <p>Access Developer Webcasts on new tools and topics</p>
              <p>Connect with BlackBerry experts to get answers for your mobile app questions</p>
              <p>And more...</p>
            </div>
          </div>

          <div id="enterprise-developer-form" class="large-6 medium-12 small-12 columns">
            <h3>Join the BlackBerry Enterprise Developer Program now.</h3>
            <p>You’ll get access to exclusive resources and receive our regular newsletter.</p>
              <div class="form-submission">
                <form method="post" action="mailsend.php">
                  <div class="row">
                    <h5>First Name</h5>
                    <input type="text" name="firstName" required />
                    <h5>Last Name</h5>
                    <input type="text" name="lastName" required />
                    <h5>Email Address</h5>
                    <input type="text" name="email" required />
                    <h5>Company</h5>
                    <input type="text" class="last" name="company" required />
                    <input type="hidden" name="program" value="* Program Registration" />
                  </div>

                  <?php if (isset($_GET['webcasts'])) { ?>
                    <input type="hidden" name="webcasts" value="1" />
                  <?php } ?>
              </div>
              <div class="row form-footnote">
                <div class="large-4 medium-4 small-12 columns">
                  <input type="submit" class="button submit-cta" href="#" value="Sign me up" />
                </div>
                <div class="large-8 medium-8 small-12 columns">
                  <p>You can later withdraw your consent through links available in our <a href="http://web.blackberry.com/legal/privacy-policy.html" target="_blank">Privacy Policy</a>, or by writing us at: Privacy Office c/o BlackBerry Legal Department, 2200 University Avenue East, Waterloo, Ontario, Canada, N2K 0A7</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      </form>
    </div>
    </div>
    </div>
    </div>

    <!--- ********* ENTERPRISE PRO STATUS *********  --->

    <div id="enterprise-pro-status">
      <div class="sub-title-2 black">
        <h4>Keep your pro status</h4>
      </div>
      <div class="row">
        <div class="large-6 medium-6 small-12 columns">
          <p>BlackBerry and Good are visionaries in enterprise mobility. Together, we offer the industry’s most secure enterprise mobile app platform, used by millions of enterprise devices around the world. Plug into our platform, and access exclusive resources
            for building, deploying and managing apps.</p>
        </div>
        <div class="large-6 medium-6 small-12 columns">
        </div>
      </div>
    </div>


    <div class="row">
      <div class="large-12 medium-12 small-12 columns ">
        <div id="enterprise-privacy-policy">
          <p><a href="http://web.blackberry.com/legal/privacy-policy.html" target="_blank">Privacy Policy</a></p>
          <p>© 2016 BlackBerry Limited, 2200 University Avenue East, Waterloo, Ontario, Canada, N2K 0A7. All rights reserved. BlackBerry®, BBM® and related trademarks, names and logos are the property of BlackBerry and are registered and/or used in the U.S.
            and countries around the world.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    <script src="bower_components/jquery/dist/jquery.js"></script>

  </body>

  </html>
