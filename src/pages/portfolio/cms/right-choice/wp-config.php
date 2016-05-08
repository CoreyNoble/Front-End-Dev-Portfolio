<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'coreynob_ss_dbnamec28');

/** MySQL database username */
define('DB_USER', 'coreynob_admin');

/** MySQL database password */
define('DB_PASSWORD', 'Smokey51!!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '<pF&fHxL+E*_s!sia<D&;V>;V;[/{*TI;Db(/pw+k-YNyN;ufaKxQs{+XsLeN;CpzOddv?D[MR/>PhS(wM%IWx){C_gfqyYl^yQs>bdgShQ*+rU]P(wA<;oWOy?Q[aGQ');
define('SECURE_AUTH_KEY', 'GySPhBvD-SiOLBimz>{ufzU]cP(T$f?}}wNo+vx=jB-pUAL}r^xNiI|zJeDI<dDA)dYf$uQ/SwkmnzzZBAVIh?mqVaTkhb}u}($Ok?+R$Xj_bqv[jqh*HhFrSPQWTwh*');
define('LOGGED_IN_KEY', '{Oqo@Rs;NAQK|/Renm%[^^!yDSS=K^VlOX;tuT%EMD!!_(dgY_L;]L?XhFZI-HhLD_m;$!E_h!{c_P_-gdUCCJN%>()<&<ig@P]hptvQZa%n&JD$_xVlQNzKWpk+f&O+');
define('NONCE_KEY', '*RbYE?!re[a]$RqPU<UVKiOn@kqleH_KtDYcWIev]b!aORn[niR*V@{oI?C-v^TmOx/TR-_r<c//JADWnc?>aC(RcITa^pK=V[?RYx&bL+^zy&jMegI{ngVy&SB+DA=l');
define('AUTH_SALT', 'vxBUoV?-=eP*JfsGO+l&IgoNT]+H!<Ha^A;caTnezT|z^vO^f+i)i$+m*ITwCbtEDHsLKB!nkwjaARtTyz;tq@VAykHoeOKsCFJW(R&|N>?*@idA//wv&fz&|*SlMGgi');
define('SECURE_AUTH_SALT', 'T|Qvi[zv@Kp]+xEzdQ]TWuoAGxm<IVspcQ+tcmz(mg|dO[TQ(Fv<wz%dPqY;ypk{+_w>d[x=xlR!roidt(YdYYV^afNcriUVTcodhcDhnKZuAWDG;<Gm+_-Fa&x<Lr{u');
define('LOGGED_IN_SALT', 'hbMYO_Ud<bex?UTpqV}V]>gfTsC_Zpp=&qa%asyNKaWBQuEx@xvaPcomRESu<<uBl{lLUcIjCwvQY%F[!Dy!g_*RPSzE[EIQRJWJ*!ORk!WSTo$Ef?jtBW{&]V{jWGj$');
define('NONCE_SALT', 'rZ$(Dn$ng]JPYb=;l@s-vHxINsy?US+XCpQ$e?[|}-!lH=x}q>zUoll$rins@x>wWaJZme+FhNZEq*JUxP|Ts?jj-kP+NI;NJ-/g@kQmQMWOUuwyEyjYN-l(=xnb{Auf');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');