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
define('DB_NAME', 'coreynob_ss_dbname976');

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
define('AUTH_KEY', 'iX++v!F/xC$n}{/o-cRT*-IIgsPVHC=J@ivYtc]Y|bzGdsH$NEiHK$mO&yzQ=[pVezndyFAfSMI%;SdcJmN+a*=%G/Nt>&HL>q-{fm?V@bC!*ZN(iRkbXC/T@IdgGgpQ');
define('SECURE_AUTH_KEY', 't=qa|zmRNr@dZ+UOCL/vT*FF@n*-/}wo]&G*@b[{ok-wG%EqFA!a/G$?Fu+aZ/u}gne%M|D*P$vUdQX+}D$b[iHZHHqLr%j$*?ZHgY*lTimH[grs)gzMcq{YW+*{eQf=');
define('LOGGED_IN_KEY', '!uuBB@/G*ANLG_Tsc{&}z|SEg++fNYl/{z?_fQ*?_rcE)c!vFCD@pSaBGO=WIa]oSrT{H$KoYFIQfw+_AFNJJQ@L[<y&xo%$DRmoj(e{XM/|X%qOJngwgyjt}pk}FAD&');
define('NONCE_KEY', 'eJGF?ltWhwOhPy/QlJ{}zI{fQ{&W^X*]tEAE+<;XI={=LbPdlGf)ZuQqQCA{i^Tnv+cKL/EQ_CJfPqmrm-+U;y*T%cj+Q<pKM[(Yc{/l]Zxcnptr|Zu&]FnSpt|/EKse');
define('AUTH_SALT', 'Pd-xaLllRoq(qXWutYE+wiV|/*u]u]O_]V$x+[nP/wMLfJOZDzA_GS{^Y?)+uBiHi_g&$S*^W(VTQ[fJVQzx*z*QL(gyhb{@{obk)ZMk*nYT=xV?h-n&;Q?@FqXcOijp');
define('SECURE_AUTH_SALT', 'fIKdt-CkR^dzpj)US|l@cZVeA}=tNsZ}qmpU>-hXRkDI|HZ=]l)b=I{(Wj>LGgRs*a&&t>[LUx]E>%!xJz*}GC_gs$Y&kvuN+smU_FgT!+Swpt-B+rNTRSy{q{PM%YL)');
define('LOGGED_IN_SALT', 'lufSnBQ|HiYq<Qa>eKnE]WuQ}>HR|*OH&w+D{^%yC/lB)@_q{;jyITHumvQqMtZ=lc&;}d+T^Vn^BzIwFRDbYKCG<<mns^><Sq]nuw$)I;/dcv!}c@]r+<@_rk@}{C[P');
define('NONCE_SALT', 'alDAPhyub_Qdm;?F?Ap>koaVdi/*p$YZ;YQmK<Aq^)>AE=BuuM<&QxlhXSz-kaROV%WE)z*/NGt<k?+I$-KBmQIQ;COpAiDOYtOLz/R+[zh(A-|]_IfMV]CEPp_Ka{JT');

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