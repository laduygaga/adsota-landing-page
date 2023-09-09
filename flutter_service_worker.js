'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/refs/heads/master": "b898854242b6a1595a61d354ab7173fb",
".git/refs/remotes/origin/master": "b898854242b6a1595a61d354ab7173fb",
".git/COMMIT_EDITMSG": "47d4447a2d49d6b6bb41774c0aecab77",
".git/logs/refs/heads/master": "3645c13487b6b370f942c6d8ce57ee79",
".git/logs/refs/remotes/origin/master": "5d208bbfb7639397a4ab5c6141d0c54c",
".git/logs/HEAD": "3645c13487b6b370f942c6d8ce57ee79",
".git/index": "6441afdc6d37789f57ebde1e285d78a3",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/d8/d72e7928011af6e7bbf4e325d9e5c223b15eb6": "8999f144ca049b73624e3448fbc82d58",
".git/objects/6b/5d38711064ff3d1f6364d9a191cf7082d1db44": "8b1d7e4b1c02dc5391e998c4ffb4de99",
".git/objects/5c/04ca092cdacd9587299d94b59ab84fe5a4584a": "0c6dcd705cde89ef91be4f124de6c2f9",
".git/objects/5c/7fd0bef3f7117d22b2d8e875a25152c3cabcd7": "875fc17c8951ac8166c293fa7d955601",
".git/objects/81/087b1461cce49a2642835b88421884da3c4360": "c83816bbf024c95818d01ef79b359540",
".git/objects/f0/8771bde45f17cb16f692a8b8a0871ce6783774": "dc696bfb4eb8e5e314941246afbabf8b",
".git/objects/f0/a3ff8f410a990d5077c6d2a9e8a88a25959501": "1f6f12d2f0c20fa2da022f043643a595",
".git/objects/db/a38f40909ea7591483d7aab41cf732870085a0": "710b058d59a3232aafc1d975621429f6",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/39/fb384643f0b939dd51487c5cdf7b825dfc1bfd": "8b2baf5f358271816eee55c810b708d5",
".git/objects/84/966a3891393c2b2ab8e94a5ba8e20d9236856b": "54b9ccd84a45decb23846e6268aa7629",
".git/objects/6c/7dc7c99c5e8c9684df3f11e4f3a242af673d46": "df50cb35d0d11ad0a1c8103cb1543315",
".git/objects/64/507f9ab3d6db8ea4692e610c7fe55f252df78b": "1a1b80de6e5cb0ffd42d389feeae27be",
".git/objects/27/5b3c178f9aff58ac747411c653bebe11f053da": "e98cb2797f6af5123da90b74414def07",
".git/objects/d0/56f2cfd37bd39d70933c35ae15b609a9c3006a": "c0f7c133c9c7bed1eba4e191d3ca4739",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/b9/335d5e6572d01be7ac5059dee330f66430fe71": "8f3684e6bcd766bb77f27b2ad2ca7d44",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/61/f4b4dec4069c17b1f85e784d593ecb464391b4": "e6108c8dfad0bd302d7c70064407960c",
".git/objects/6e/8d1075d8605ff70413ab31f4fa8dfb48b550d2": "1d8f2b2dbd17f829552707d874c1fcde",
".git/objects/6e/0bed920969da8c5758c2c784084e053fb86b94": "5a9d80d31a13154f3a22da4803bb84dc",
".git/objects/a7/b848f90cbfa7ea88d7b8e793d98aec5931f4d4": "ca3ed4ec4776b728a2f56567c5d800d4",
".git/objects/a7/1364ae7762cb52466817b39b6cb6d1e2adb202": "657a19b8ebc3ca8967d95991f6904df3",
".git/objects/e3/3e3cb97ef36395df188f46777d2028fb9db655": "e9099d8399daac8bd8e2fed703b58d8e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/73cd0bc6f94f4bc28d179e97b3db4ffe216e31": "d5f85faaa803530dbc3d7eccab64bef2",
".git/objects/f6/8170bfc457c8b715d3a35264ce011ae1642933": "aa41ee3c86e861b5717fa53b5396bf27",
".git/objects/40/60a22945bbadd3e6af1af4b3804755300f3010": "e888c177bb11708c7eb1a48dbff3dca6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/bf6120d91dc58a570e352a70aaccd512bf1b56": "e407dfc43645824f9bfd1cc26b7e26f8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/d7fb68b8474009d4f5ebc7ed5c6d95cc233bce": "a0e774d33ddc4ddd496b3acc2503e490",
".git/objects/f5/0594a0717fb0862ecf6d0e72bbbd86587f39c0": "403eed6e6d0e0fd2c5e59c28b14b2f95",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/98/fc62ec4c5ae596845aaa1c3aba3d53de483a34": "dd8c60efd03ac984d72af3633e21e815",
".git/objects/45/bc3d35e96d714ba12abb9baa27cc568657e719": "d307a2672cf325c715b261055274a518",
".git/objects/9d/570df75f5e16bfdfac0e214f797e99ab02916e": "08ba06fb8a48e855c005d55497eb5380",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/ab/db80581d9608b230fcc6e5ba493e715fa4dff6": "b8300a50b0be653619638c2fbe6769c5",
".git/objects/20/64749d611a7146b89f75be79813a32a9ea465e": "ab12ffd463d532a29c7af9db650f8d87",
".git/objects/20/58b4748e288d614d58394c01ff83f9d3e53f07": "e947d291eca3b36358c0eef66d71ddb9",
".git/objects/7e/7b57eb8a90fe3c13ec895d4f880b3ea9cd0a74": "9c321a7762f0c97fce0a83219fbf7b91",
".git/objects/92/f2baa2ff7edfab917fb4b49641d6bffea2154f": "71616fecd5ecbc878a8396792eaba9c6",
".git/objects/92/185a51dd00c3ecb92e9f8d858a0f9dd6771168": "19750e3aee51a1654f7676765f9e086e",
".git/objects/4e/95b20dc829a10672dcea30ac132089bc22b8d2": "2a0ab02ba66615d70afe1e54a6c677b2",
".git/objects/86/203b81337caf5a9226a5b7cb8e898f45fa8f58": "a0004023ea5ce54cb79b9c81605109ba",
".git/objects/49/da5136fc722f4f540cdbfb7bf0abea79ab74a7": "5eeba39ea506e3aec55d354fdd9d4266",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/1cb579bd9294db1ea88620752a165fc8648dcd": "9d7d224f2162ffd5afd1523a25599aab",
".git/objects/1d/8950c68fce0027afcc8b7d7f29f01a18b66e15": "4714b956c22649a74e6a69d20a81f5a8",
".git/objects/0e/597d8933905b23dc267b3205fda4a1083cdcee": "f2a45f1b5b0ece449d213038139d0b3c",
".git/objects/0e/cdaa3aa59703e09350c84b7dd97d21ef147556": "a35dfa93d30777adb744f6c00a5136f3",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c2/8985e603dff76f5410de56d4948adbf6ae1c0a": "ebb3a69abe38e52e8a965a1fe5373dc8",
".git/objects/c2/262fd929b1300febd7468880dcbaf50847d022": "f5a13b5a3a697db3173361d7e218e7bd",
".git/objects/aa/7de0da86e1a148a1adb820ff7d9a9943860d74": "262d813b137ce17abc2161a378269ce3",
".git/objects/74/1de554c63657cddccd50257fdc44137481e96d": "013c96c16b5990fe83892a2fef293ce3",
".git/objects/74/e1d95b834764b0079c77037087f9b38c0f0689": "8d3d8cd1923fa21d9a332498b69151f0",
".git/objects/23/3109f98604adab01092367eaabe446b6678010": "bb9bdbf996f89240f2599018d1314819",
".git/objects/97/027f781a8e96aa56c4db19a3cd7e1258e40cdd": "f7fbee05bda73ec6c8fd60733dc5a5e0",
".git/objects/6f/442719ceef231617204864fdc9f6e7f74c78f8": "87353b88df591c209b9d03d977e7dba1",
".git/objects/6f/b01ede69951b2c43aec98fa43701b6e1a9ac0f": "c6d1636c2f729178816769d0cf7af2e1",
".git/objects/4b/5b0aa4f1d9b678407716e2f9728eed82d46bc8": "390e5cd95f4ae433fdb39e02d76736dc",
".git/objects/35/59faae7681abdc008ea0054e301a4d4d5e0940": "306ef546e42f2b0c5797802f8859a932",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/440752674b1e632cb6b63bc2eef19249f6bcc5": "9df85a2e82e0fce395d1ea31cf6e9fc6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/8d/9fdab47440fb1b6c34c1462d008ea7f3e20ec0": "6c815d99bf1a73efc885d153f29f919d",
".git/objects/79/43014395df8ae80e613cf3c2c80deec6a17779": "ce4daffe08a8dfb9661ed91cb4deebad",
".git/objects/22/92c90200f18b13df4352da29f003d3688859e2": "9dd4abe3bd1961bbc748c54038049bc3",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/1ff56f34e735c30d4936ab90c8c19769668921": "8e90c3e7b2ad276314ae88d87fb26c70",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/03/741b1c22545bf4e11aac906799b1486319597a": "97df90cb8c5c2bac7c7a56cbf8bff100",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/62dd1114966c26273e8a70d52d441a5e380f08": "fb6c31215bbfad102fb0d037a342509a",
".git/objects/07/4f68c73d71ec3f28e5b5a916f856d80180b8bc": "ddad2db733b6e7a055527499534215cf",
".git/objects/07/427bb4a8adc320d49910e37db0d2a94c8c6317": "5b6de0e64bd9bcdd2888ba211480227f",
".git/objects/12/a164dc700494d0cb9edf907626c23c524eebf5": "17286a5b5404d9133e74c7007115620a",
".git/objects/12/90d30cdceb8a372ba13dcb56dd84266df83efe": "dce78a98880d04090c1d5777577272a4",
".git/objects/12/1309fc7d64b1ce6ac0aa9872064b02a4deed08": "dab794ff1a37c37cd94ba57e64e1a771",
".git/objects/12/caa589a4d0ae11c12f47e443fd508fe4e5bb6c": "ad7470b3beabaffc79da3a0612a5ce79",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/bcbb17812df805c8688314f6c69644ed98046c": "01b3fa3fae716826bcf6587b843a7d50",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/fa/a0c5fd41aeccbbc85baf91d0133a432189785e": "89891848657daf8d04653c3c957b4427",
".git/objects/18/f014a413fa8eac72ae02c2d75848aa155071c8": "13a2dbd87b6f24bd7d0576191ff6d47e",
".git/objects/62/9022fe7eee9e76d6b4972169bc081e4a494965": "11715f0e9ea80bf3c7299a7897aa63a8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/26/03ad39c7395a37ef2d15d674948e748a1de2ce": "ef4da16cd8465880d15c4901b5c51dc7",
".git/objects/26/1fd85467d7b347a9cbd0b0f850f680139848e1": "5770e7bdffe004411e24c784a932762f",
".git/objects/c7/641a38e5790ffce205bf569b81144c218d2345": "5c54091bbc0801b73a1f3324550b68bf",
".git/objects/fc/8fc5a50c3fb4a6373e49ce5da66f139dc367d0": "53703ba3d0c1878006d1f2b43e26a1a1",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/68/2ad3e0254635387bd23052f4eaf929c2860ab3": "a67fbc140443dcfa2837374aca74c529",
".git/objects/a4/2976b3719e749f43fdd1d9fffd0317dc9cd783": "8ceda67ad2994a55ff23c3781b18d040",
".git/objects/42/0bf703b4facb9fdd2915c4e823e407476e7f60": "3b44f6d362e5f2775ff30989538f248a",
".git/objects/42/36f99f0d01fc146120f21cc20206053247854e": "81a8a742180544369018d36180b368fe",
".git/objects/42/750c21dd5ee854e58105c66d3a90e756768621": "489244938e91dcc982794f2c054892e2",
".git/objects/53/52ea699c28dde93a147c75aa7f305c969c7776": "ad89a98b7ea2125057fbe2a5619d9980",
".git/objects/ce/ea117209424ddc19c585a0a0065c705f1d8f85": "8f4d27365188767ed4f6578831c1609a",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/7a/09ebba9eab431afa24524d0b740a593b8aee22": "681a19a03180fb202ab43c1b7c439145",
".git/objects/3a/b8c24af32f58458e15270a7273aaa043040a49": "ac8311c1915553777215d704775f87b5",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/52/984e817f9bde74d40ad712cd38a44dfe5f72da": "89607c27f5d3304a75d4d20d93551acd",
".git/objects/c5/d6a5ae34da6965ec81c91f581b8ac6e31d624f": "7a4d5156c0a84b5ce49dfd14db51d13b",
".git/objects/21/22758153f67c053518a2bb646e0b53104a9731": "e9c9c424ce42ac0589b195846452de1f",
".git/objects/d9/5da63e3b8ef544ccd84b9bee92f1cb3e6323c7": "80f7d75d2ff291753841041bb8bc4f6d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/bd/546df1705435c589394a3f1e3d1761bcd81053": "0046e0e696368592b38c768a59de4827",
".git/objects/b5/3085647a4a6d2a6b32d4a13b7a5ffbfd2080f7": "d78dcbcef0f0816b1dc6b97257c6d658",
".git/objects/b5/bdb075c6bccf8e47b2af4c1b5984a3aee95544": "3da73ad6ded50844bdd1d4a783fff828",
".git/objects/b5/084c11a2a7c0f12914768f8966abcb8c95ea2d": "ca19bcfabaee4a7f3cad463da50b8c3c",
".git/objects/55/121bbdfcbdb7f125ef295e043ef96b8c8c3fff": "d9f06593a530464af3c18d89fc9244ba",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/32/2efd071d4c22751cf3afd81eb9f67440ccfb5e": "9367152abcdd737cdfc056b51e145dbb",
".git/objects/09/6435bed5ace16dff549a1e6e1810edf1a8dec1": "850b33eceab345722f37e9880431ac9b",
".git/objects/e9/2700ea5e8b969469bf93b334a00c0c8ec69fed": "90f58f360ee62593818577c775beede3",
".git/objects/e5/e146324b05123b531f59fa854e4a9dda31ac7d": "054e0f44bcb27d4a702aeccf841556ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/78/c8b8c23b4c468b88a5acbb109a7689bdf76b2f": "d6d151c8e2e999bce3fcd0b707ba1424",
".git/objects/13/0e3db2404c7ceb1e9cbd2f32396a9098d03f03": "a8a7af65ffeac282904c29d107bbab57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "603301721b98bf4a424edbb2fc6743cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"assets/NOTICES": "da4b81fd59d6c10938caea955933d8c0",
"assets/AssetManifest.bin": "f7289b2653eeb129475ecffbfbc7cc0f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/images/asian-girl.png": "0927e182c5032034febdae5d4d5b0f84",
"assets/assets/images/thao-anh.png": "991a95d9dd5a3e914e37c77f219b7e27",
"assets/assets/images/web-icon.png": "a66311eddfa286d13417c2e727017f0a",
"assets/assets/images/linkedin-icon.png": "e3eac17059529ef8e0953951f09b974f",
"assets/assets/images/digital-marketing-big.png": "a6eed6053e2e06adffdb5934b98b1dc9",
"assets/assets/images/idea.png": "23ee29695bea651f0de586c9af0816cf",
"assets/assets/images/brand-marketing.png": "59c72ddb922419d83668ecfad1a1503a",
"assets/assets/images/arrow_up.svg": "2d73a9cfcbbde8b68782d9246bf7308a",
"assets/assets/images/branding-marketing-big.png": "f28e3aa3f7a97db0823a821dfe58b65b",
"assets/assets/images/logo.svg": "fe4267b591d5490a1937f2fc8053ff6d",
"assets/assets/images/digital-marketing.png": "2b6396dde7bd9f7dfcefa31517fb7608",
"assets/assets/images/contact.png": "e649f6568eaa0a040bdbe716caa180db",
"assets/assets/images/the-long.png": "258f1b1e63adf01582c86f8d6b8f82e2",
"assets/assets/images/arrow.svg": "414ba3d69ec54beda4bd2ead5018e379",
"assets/assets/images/arrow_up.png": "9cfbce7fab1f73f696b67c7422be461c",
"assets/assets/images/smiling-boy.png": "244c9328cfe8113dbc304aa779fb052b",
"assets/assets/images/branding-mkt-3.png": "fe28dfe2eb8e591a1436107f66540007",
"assets/assets/images/anh-dang-phu-vinh-ceo-adsota.png": "edc5c60c4c55821f7347e0b0519454bb",
"assets/assets/images/digital-mkt-3.png": "c1e22fe412be39d70caaf172bb176b33",
"assets/assets/images/apply.png": "afeaa092c617f20f031c5280cef23375",
"assets/assets/images/the-long-manager-adsota.png": "01225dd1b9caedddec3b1ec924bc636f",
"assets/assets/images/Ch%25E1%25BB%258B%2520Ho%25C3%25A0ng%2520Th%25E1%25BA%25A3o%2520Anh%2520-%2520CMO%2520Adsota%2520Agency%25201.png": "d429b9e25195f92e63e8c720e90839bd",
"assets/assets/images/phu-vinh.png": "072e5d65086f3583338a2f4f447fd1a7",
"assets/assets/images/develop.png": "e2ca11188db174d80c97f02d796ccd31",
"assets/assets/images/fb-icon.png": "d389f8e4565346bee29d0888617557ab",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0442afee4b36f852feb611f2a209630",
"assets/AssetManifest.json": "cd622c8f944be50f996f5c320a9ed89d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "6e6d09f6ab16197d63f081d4f7ec2e7c",
"main.dart.js": "36ca4b8e6224dfcc877be825ae3612d4",
"manifest.json": "ab472f5a7c31196adec16e6a2af7f4bc",
"favicon.png": "6e6d09f6ab16197d63f081d4f7ec2e7c",
"index.html": "161795186bc3d3f98cdfef8f8de147eb",
"/": "161795186bc3d3f98cdfef8f8de147eb",
"version.json": "17b23d1c8ea1e967ab4c787e4aa7bee2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
