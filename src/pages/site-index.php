<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Index | Corey Noble</title>
    <link rel="icon" type="image/jpeg" href="http://www.corey-noble.com/favicon.jpg" />

    <!-- Relative CSS / Javascript -->
    <link rel="stylesheet" href="assets/css/app.css" />
    <link rel="stylesheet" href="assets/css/animate.css" />
    <script src="bower_components/modernizr/modernizr.js"></script>
  </head>
  <body>

    <!-- Navigation Menu -->
    <?php include("partials/navigation.html"); ?>

  <div class="section blue">
    <div class="row">
      <div class="large-12 columns">
        <h1 class="header-no-parallax slideInLeft wow">Site Index</h1>
        <h3 class="slideInLeft wow">Below is my full website heirarchy:</h3>
      </div>
    </div>
  </div>

  <div class="section black">
    <div class="row">
      <h2 class="slideInLeft wow">Site Index</h2>
      <div class="large-12 columns slideInRight wow">
          <h4><a href="../../index.html">Home</a></h4>
          <h4><a href="../../portfolio.html">Portfolio</a></h4>
          <ul class="slideInRight wow">
            <li><h4><a title="Framework Example 1" href="/portfolio/frameworks/example-1.html">Framework Example 1</a></h4></li>
            <li><h4><a title="Framework Example 2" href="/portfolio/frameworks/example-2.html">Framework Example 2</a></h4></li>
            <li><h4><a title="CMS Skillset" href="/portfolio/cms/skillset.html">CMS Skillset</a></h4></li>
            <li><h4><a title="WordPress Example 2" href="/portfolio/cms/wordpress-example-1.html">WordPress Example 1</a></h4></li>
            <li><h4><a title="WordPress Example 1" href="/portfolio/cms/wordpress-example-2.html">WordPress Example 2</a></h4></li>
          </ul>
          <h4><a title="About Me" href="/about.html">About</a></h4>
          <h4><a title="My Services" href="/services.html">Services</a></h4>
          <h4><a title="Contact Me" href="/contact.html">Contact</a></h4>
          <div class="resume-cta">
            <h3 class="slideInRight wow"><a id="resume" href="../../resume.pdf" target="_blank">VIEW MY CV / RESUME</a></h3>
          </div>
      </div>
    </div>
  </div>

    <div id="parallax-site-index" class="parallax hide-tablet hide-mobile" data-stellar-background-ratio="0.8" ></div>

    <!-- Footer -->
    <?php include("partials/footer.html"); ?>

    <!-- Scripts -->
    <?php include("partials/scripts.html"); ?>
  </body>
</html>
