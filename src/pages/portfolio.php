<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio | Corey Noble</title>
    <link rel="icon" type="image/jpeg" href="http://www.corey-noble.com/favicon.jpg" />

    <!-- Relative CSS / Javascript -->
    <link rel="stylesheet" href="assets/css/app.css" />
    <link rel="stylesheet" href="assets/css/animate.css" />
    <script src="bower_components/modernizr/modernizr.js"></script>
  </head>
  <body>

    <!-- Navigation Menu -->
    <?php include("partials/navigation.html"); ?>

    <div id="parallax-hero-3" class="parallax" data-stellar-background-ratio="0.4" >
      <h1 class="zoomInDown wow">My Portfolio</h1>
    </div>

    <div class="section black">
      <div class="row">
        <div class="large-12 columns">
          <?php include("../../partials/crumbs.php"); ?>

          <!-- Development Showcase -->
          <div class="large-12 medium-12 small-12 columns">
                <h2 class="showcase-head">Development Showcase</h2>
          </div>

          <div class="showcase-1">
            <div class="fadeIn wow large-12 medium-12 small-12 columns">
              <a href="/portfolio/frameworks/example-1.php">
                <div class="showcase-example blue-gradient">
                  <h3 class="light-blue">Example 1</h3>
                </div>
              </a>
            </div>

            <div class="fadeIn wow large-12 medium-12 small-12 columns">
              <a href="/portfolio/frameworks/example-2.php">
                <div class="showcase-example blue-gradient">
                  <h3 class="light-blue">Example 2</h3>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="section white">
      <div class="row">
        <!-- CMS Showcase -->
        <div class="large-12 medium-12 small-12 columns">
              <h2 class="showcase-head">CMS Showcase</h2>
        </div>

        <div class="showcase-2">
          <div class="fadeIn wow large-12 medium-12 small-12 columns">
            <a href="/portfolio/cms/skillset.php">
              <div class="showcase-example blue-gradient">
                <h3 class="black">My CMS Skills</h3>
              </div>
            </a>
          </div>

          <div class="fadeIn wow large-6 medium-6 small-12 columns">
            <a href="/portfolio/cms/right-choice.php">
              <div class="showcase-example blue-gradient">
                <h3 class="black">Right Choice</h3>
              </div>
            </a>
          </div>

          <div class="fadeIn wow large-6 medium-6 small-12 columns">
            <a href="/portfolio/cms/ctkr-music.php">
              <div class="showcase-example blue-gradient">
                <h3 class="black">CTKR Music</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  <div id="parallax-cms-skillset" class="parallax hide-tablet hide-mobile" data-stellar-background-ratio="0.8" ></div>

  <!-- Footer -->
  <?php include("partials/footer.html"); ?>

  <!-- Scripts -->
  <?php include("partials/scripts.html"); ?>
  </body>
</html>
