<?php
echo "<ul class="crumbs">";
/* get array containing each directory name in the path */
$parts = explode("/", dirname($_SERVER['REQUEST_URI']));
echo "<li><a href="/">Home</a></li>";
foreach ($parts as $key => $dir) {
switch ($dir) {
case "about": $label = "About Us"; break;
/* if not in the exception list above,
use the directory name, capitalized */
default: $label = ucwords($dir); break;
}
/* start fresh, then add each directory back to the URL */
$url = "";
for ($i = 1; $i <= $key; $i++)
{ $url .= $parts&#91;$i&#93; . "/"; }
if ($dir != "")
echo "<li>> <a href="/$url">$label</a></li>";
}
echo "</ul>";
?>
