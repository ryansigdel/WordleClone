document.addEventListener('DOMContentLoaded', () => {
    const KEY = '<YOUR_KEY_GOES_HERE>';
    const LOCAL_WORDS = [
        "about", "above", "abuse", "actor", "acute", "adapt", "admin", "admit", "adopt", "adult", "aryan",
        "after", "again", "agent", "agree", "ahead", "alarm", "album", "alert", "alike", "alive",
        "allow", "alone", "along", "alter", "among", "anger", "angle", "angry", "apart", "apple",
        "apply", "arena", "argue", "arise", "array", "aside", "asset", "audio", "audit", "avoid",
        "award", "aware", "badly", "baker", "basic", "basis", "beach", "begin", "bench", "bible",
        "birth", "black", "blame", "blend", "bless", "blind", "block", "blood", "board", "boost",
        "brain", "brand", "bread", "break", "breed", "brief", "bring", "broad", "brown", "brush",
        "build", "built", "buyer", "cable", "carry", "catch", "cause", "chain", "chair", "chest",
        "child", "choir", "civil", "claim", "class", "clean", "clear", "clerk", "click", "clock",
        "close", "coach", "coast", "color", "comic", "count", "could", "cough", "court", "cover",
        "crazy", "cream", "crime", "cross", "crowd", "crown", "curve", "cycle", "daily", "dance",
        "death", "decay", "delay", "depth", "devil", "diary", "digit", "dirty", "doubt", "dream",
        "dress", "drink", "drive", "drove", "earth", "eight", "elite", "empty", "enemy", "enjoy",
        "enter", "entry", "equal", "error", "event", "every", "exact", "exist", "extra", "faith",
        "false", "fault", "fiber", "field", "fight", "final", "first", "float", "floor", "focus",
        "force", "forth", "forty", "found", "frame", "fresh", "front", "fruit", "fully", "funny",
        "giant", "given", "glass", "glide", "globe", "grace", "grade", "grand", "grant", "grass",
        "great", "green", "greet", "grief", "group", "grown", "guard", "guest", "guide", "habit",
        "happy", "harsh", "heart", "heavy", "hence", "hobby", "honor", "hotel", "house", "human",
        "ideal", "image", "index", "inner", "input", "issue", "ivory", "joint", "judge", "juicy",
        "jolly", "knife", "label", "labor", "large", "later", "layer", "learn", "leave", "legal",
        "light", "limit", "linen", "liner", "local", "logic", "lover", "lower", "lucky", "lunch",
        "magic", "major", "maybe", "mayor", "metal", "meter", "micro", "minor", "model", "money",
        "month", "moral", "motor", "mount", "mouse", "mouth", "movie", "music", "naval", "never",
        "niece", "night", "noisy", "north", "noted", "novel", "nurse",
        "ocean", "offer", "often", "order", "other", "outer", "paint", "panel", "paper", "party",
        "peace", "phase", "phone", "photo", "piece", "pilot", "pitch", "place", "plain",
        "plant", "plate", "point", "porch", "power", "press", "price", "pride", "prime", "print",
        "prior", "prize", "proof", "proud", "prove", "quick", "quiet", "quite", "radio", "raise",
        "range", "rapid", "ratio", "reach", "ready", "refer", "relax", "reply", "rider", "right",
        "rival", "river", "rough", "round", "route", "royal", "rural", "sadly", "salad", "sales",
        "sauce", "scale", "scene", "scope", "score", "sense", "serve", "setup", "shade", "shake",
        "shall", "shape", "share", "sharp", "sheet", "shelf", "shell", "shift", "shine", "shirt",
        "shock", "shoot", "short", "shout", "sight", "since", "skill", "sleep", "slice", "slide",
        "small", "smart", "smile", "smoke", "solid", "solve", "sorry", "sound", "south", "space",
        "speak", "speed", "spend", "split", "sport", "staff", "stage", "stand", "start", "state",
        "steam", "steel", "stick", "still", "stock", "stone", "store", "storm", "story", "strip",
        "study", "stuff", "style", "sugar", "suite", "super", "sweet", "table", "tales", "talks",
        "tanks", "taste", "taxes", "teach", "terms", "thank", "theme", "there", "these", "thick",
        "thing", "think", "third", "those", "three", "throw", "tight", "times", "today", "topic",
        "total", "touch", "tough", "tower", "track", "trade", "train", "treat", "trend", "trial",
        "trick", "troop", "truck", "truly", "trust", "truth", "twice", "under", "union", "unity",
        "until", "upper", "usual", "value", "verse", "video", "view", "visit", "voice", "voter",
        "wages", "wait", "walks", "walls", "wants", "watch", "water", "weary", "weird", "wheel",
        "where", "which", "while", "white", "whole", "whose", "woman", "words", "world", "worry",
        "worse", "worth", "would", "write", "wrong", "yacht", "yield", "young", "yours", "youth",
        "zebra", "zesty", "aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abler", "abode",
        "about", "above", "abyss", "ached", "aches", "acids", "acorn", "acrid", "acted", "actor", "adage",
        "adapt", "added", "adder", "adept", "adieu", "admin", "admit", "adobe", "adopt", "adore", "adorn",
        "adult", "advent", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony",
        "agree", "ahead", "aided", "aisle", "alarm", "album", "alert", "algae", "alias", "alibi", "alien",
        "align", "alike", "alive", "allay", "alley", "allot", "allow", "alloy", "aloft", "alone", "along",
        "aloof", "alpha", "altar", "alter", "amass", "amaze", "amber", "amble", "amend", "amiss", "among",
        "ample", "amply", "amuse", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", "annex",
        "annoy", "annul", "anode", "antic", "aphid", "aping", "apnea", " অ্যাপেল", "apply", "apron", "aptly", "aquae",
        "aquas", "arbor", "ardor", "arena", "argue", "arise", "armor", "aroma", "arose", "array", "arrow",
        "ascot", "ashen", "ashes", "aside", "askew", "aspen", "asset", "atlas", "atoll", "atoms", "attic",
        "audio", "audit", "augur", "aunts", "aural", "avail", "avert", "avoid", "avows", "await", "awake",
        "award", "aware", "awful", "awoke", "axiom", "azure", "babel", "babes", "backs", "badge", "badly",
        "bagel", "baker", "bales", "balky", "balls", "balms", "banal", "bands", "banes", "bangs", "banjo",
        "banks", "barbs", "bards", "bared", "barer", "barge", "barky", "barns", "baron", "bases", "basic",
        "basil", "basin", "basis", "basks", "batch", "bated", "bathe", "baths", "batik", "baton", "bawdy",
        "bayou", "beach", "beads", "beams", "beans", "beard", "bears", "beast", "beats", "beech", "beefy",
        "beeps", "befit", "began", "begin", "begot", "begun", "beige", "being", "belch", "belie", "belle",
        "belly", "below", "belts", "bends", "beret", "berry", "berth", "beset", "bests", "betas", "betel",
        "beton", "bezel", "biddy", "bided", "bides", "bidet", "bight", "bigot", "bijou", "biked", "biker",
        "bikes", "biles", "bilge", "bills", "billy", "biped", "birds", "birth", "bison", "bitch", "bites",
        "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleat", "bleed",
        "blend", "bless", "blimp", "blind", "blink", "blips", "bliss", "bloat", "block", "bloke", "blond",
        "blood", "bloom", "blots", "blown", "blues", "bluff", "blunt", "blurb", "blurt", "blush", "board",
        "boars", "boast", "bodes", "bogie", "bogus", "boils", "bolts", "bombs", "bonds", "bones", "bonus",
        "booby", "boost", "booth", "boots", "booty", "booze", "borax", "bored", "borer", "borne", "bosom",
        "bossy", "botch", "bough", "bound", "bowed", "bowel", "bower", "bowls", "boxed", "boxer", "boxes",
        "bozos", "brace", "brags", "braid", "brain", "brake", "brand", "brash", "brass", "brats", "brave",
        "brawl", "brawn", "bread", "break", "breed", "brent", "bribe", "brick", "bride", "brief", "brim",
        "brine", "bring", "brink", "briny", "brisk", "broad", "broil", "broke", "brood", "brook", "broom",
        "broth", "brown", "brows", "bruin", "brush", "brute", "bucks", "buddy", "buffs", "buggy", "bugle",
        "build", "built", "bulbs", "bulge", "bulky", "bulls", "bully", "bumps", "bunch", "bunks", "bunny",
        "burly", "burns", "burnt", "burps", "burro", "buses", "bushy", "busts", "butch", "butte", "butts",
        "buyer", "bytes", "cable", "cache", "cacti", "cadet", "cafes", "caged", "cages", "cairn", "caked",
        "cakes", "calls", "calms", "camel", "cameo", "camps", "canal", "candy", "canes", "canny", "canoe",
        "canon", "caped", "caper", "capes", "carat", "cards", "cared", "carer", "cares", "cargo", "carol",
        "carps", "carry", "carts", "carve", "cased", "cases", "cashy", "casks", "casts", "catch", "cater",
        "caulk", "cause", "cavil", "cease", "cedar", "cells", "cello", "cents", "ceres", "chain", "chair",
        "chalk", "champ", "chant", "chaos", "chaps", "charm", "chart", "chase", "chasm", "cheap", "cheat",
        "check", "cheek", "cheer", "chefs", "chess", "chest", "chick", "chide", "chief", "child", "chill",
        "chime", "china", "ching", "chips", "chirp", "chock", "choir", "choke", "choky", "chomp", "chose",
        "chows", "chuck", "chugs", "chump", "chums", "chunk", "churn", "chute", "cider", "cigar", "cilia",
        "cinch", "circa", "cited", "cites", "civic", "civil", "clack", "claim", "clamp", "clams", "clang",
        "clank", "clash", "clasp", "class", "claws", "clean", "clear", "cleat", "cleft", "clerk", "click",
        "cliff", "climb", "clime", "clips", "cloak", "clock", "clods", "clogs", "clomp", "clone", "close",
        "cloth", "cloud", "clout", "clove", "clown", "clubs", "cluck", "clued", "clues", "clump", "clung",
        "coach", "coals", "coast", "coats", "cobra", "cocoa", "codas", "codec", "coder", "codes", "coils",
        "coins", "cokes", "cola", "coldly", "colic", "colon", "color", "comas", "combo", "comes", "comet",
        "comic", "comma", "conch", "condo", "coned", "cones", "cooks", "cools", "coops", "coped", "copes",
        "copra", "corgi", "corks", "corns", "corny", "corps", "costs", "couch", "cough", "could", "count",
        "coupe", "court", "coven", "cover", "covet", "cowed", "cower", "coyly", "crabs", "crack", "craft",
        "crags", "cramp", "crams", "crane", "crank", "crape", "crash", "crass", "crate", "crawl", "craze",
        "crazy", "creak", "cream", "credo", "creed", "creek", "creep", "crepe", "crest", "cribs", "crime",
        "crimp", "crisp", "croak", "crock", "croft", "crone", "crony", "crook", "cross", "croup", "crowd",
        "crown", "crows", "crude", "cruel", "crumb", "crush", "crust", "crypt", "cubby", "cubed", "cubes",
        "cubic", "cuffs", "cumin", "cupid", "curbs", "cured", "cures", "curia", "curio", "curls", "curly",
        "curry", "curse", "curve", "curvy", "cushy", "cusps", "cuter", "cutie", "cutup", "cycle", "cynic",
        "dacha", "daddy", "daffy", "daily", "dairy", "daisy", "dales", "dally", "dance", "dandy", "dared",
        "dares", "darks", "darts", "dated", "dates", "datum", "daubs", "daunt", "dazed", "dazes", "deadly",
        "deals", "dealt", "deans", "dears", "death", "debar", "debit", "debts", "debug", "debut", "decaf",
        "decay", "decks", "decor", "decoy", "deeds", "deems", "deeps", "defer", "deify", "delay", "delta",
        "demon", "demur", "dense", "dents", "depot", "depth", "derby", "desks", "deter", "detox", "deuce",
        "devil", "dewar", "dhoti", "dials", "diary", "diced", "dices", "dicey", "dicta", "diets", "digit",
        "dikes", "dills", "dimes", "dimly", "dinar", "dined", "diner", "dines", "dingy", "dinks", "diode",
        "dirge", "dirts", "dirty", "discs", "ditch", "ditto", "divan", "dived", "diver", "dives", "dizzy",
        "docks", "dodge", "dodgy", "dodos", "doers", "doggy", "dogma", "doing", "doles", "dolls", "dolly",
        "dolor", "domes", "donas", "donee", "donor", "dooms", "doors", "doozy", "doped", "dopes", "dorky",
        "dorms", "dosed", "doses", "dotsy", "doubt", "dough", "douse", "doves", "dowdy", "dowel", "dower",
        "downs", "downy", "dowry", "drabs", "draft", "drags", "drain", "drake", "drama", "drank", "drape",
        "drawl", "drawn", "dread", "dream", "dregs", "dress", "dribs", "dried", "drier", "dries", "drift",
        "drill", "drily", "drink", "drips", "drive", "droll", "drone", "drool", "droop", "drops", "drove",
        "drown", "druid", "drums", "drunk", "drupe", "dryad", "dryer", "duals", "duchy", "duets", "duffs",
        "dukes", "dulls", "dummy", "dumps", "dumpy", "dunce", "dunes", "dungs", "dunks", "dunno", "duped",
        "dupes", "dusty", "dutch", "dwarf", "dwell", "dyers", "dying", "eager", "eagle", "eared", "earls",
        "early", "earns", "earth", "eased", "easel", "eases", "eaten", "eater", "eaves", "ebbed", "ebony",
        "edema", "edged", "edges", "edict", "edify", "eerie", "eight", "eject", "elate", "elbow", "elder",
        "elect", "elegy", "elide", "elite", "elope", "elude", "elves", "email", "embed", "ember", "emcee",
        "emery", "emirs", "empty", "enact", "ended", "endow", "enjoy", "ennui", "ensue", "enter", "entry",
        "enure", "envoy", "epics", "epoch", "equal", "equip", "erase", "erect", "ergo", "erode", "error",
        "erupt", "essay", "ethos", "evade", "evens", "event", "every", "evict", "evils", "exact", "exalt",
        "exams", "excel", "exert", "exile", "exist", "exits", "expel", "expos", "extol", "extra", "exude",
        "exult", "fable", "faced", "faces", "facet", "facia", "facts", "faded", "fades", "fails", "faint",
        "fairly", "fairy", "faith", "faked", "faker", "fakes", "falls", "false", "famed", "fancy", "fangs",
        "fanny", "farce", "fared", "fares", "farms", "fasts", "fatal", "fated", "fates", "fatly", "fault",
        "fauna", "fawns", "fazed", "faxes", "fazed", "fears", "feast", "fecal", "feeds", "feels", "feign",
        "fells", "felon", "femes", "femme", "fence", "fends", "feral", "ferns", "ferry", "fetal", "fetch",
        "feted", "fetes", "fetid", "feuds", "fever", "fewer", "fiber", "fibre", "fiche", "fiefs", "field",
        "fiend", "fiery", "fifes", "fifth", "fifty", "fight", "filed", "filer", "files", "filly", "films",
        "filth", "final", "finch", "finds", "fined", "finer", "fines", "finks", "fired", "fires", "firms",
        "first", "fishy", "fists", "fitch", "fiver", "fixes", "fizzy", "fjord", "flack", "flags", "flail",
        "flair", "flake", "flaky", "flame", "flank", "flaps", "flare", "flash", "flask", "flats", "flaws",
        "flays", "fleck", "flees", "fleet", "flesh", "flew", "flexi", "flick", "flied", "flier", "flies",
        "fling", "flint", "flips", "flirt", "flits", "float", "flock", "flogs", "flood", "floor", "flops",
        "flora", "floss", "flour", "flout", "flown", "flubs", "flues", "fluff", "fluid", "fluke", "flume",
        "flung", "flunk", "flush", "flute", "foals", "foams", "focal", "focus", "fogey", "foils", "foist",
        "folds", "folks", "folly", "fonts", "foods", "fools", "foots", "foray", "force", "fords", "fores",
        "forge", "forks", "forms", "forte", "forth", "forty", "forum", "fossa", "fouls", "found", "fount",
        "fours", "fowls", "foxed", "foxes", "foyer", "frail", "frame", "franc", "frank", "fraps", "frays",
        "freak", "freed", "freer", "frees", "fresh", "frett", "fried", "frier", "fries", "frill", "frisk",
        "frock", "frogs", "front", "frost", "frown", "froze", "fruit", "fudge", "fuels", "fugal", "fully",
        "fumed", "fumes", "funds", "fungi", "funky", "funny", "fussy", "fusty", "futon", "fuzes", "fuzzy",
        "gabby", "gable", "gales", "galls", "galop", "gamed", "games", "gamut", "gangs", "gaped", "gapes",
        "garbs", "gases", "gasps", "gassy", "gated", "gates", "gaudy", "gauge", "gaunt", "gauze", "gavel",
        "gawky", "gazed", "gazer", "gazes", "gears", "gecko", "geeks", "geese", "gelds", "gems", "genes",
        "genie", "genre", "gents", "germs", "ghast", "ghoul", "giant", "giddy", "gifts", "gilds", "gills",
        "gimpy", "gipsy", "girds", "girls", "girth", "given", "giver", "gives", "glade", "glads", "gland",
        "glare", "glass", "glaze", "gleam", "glean", "glens", "glide", "glint", "glitz", "gloat", "globe",
        "gloom", "glory", "gloss", "glows", "glued", "glues", "glumly", "gluon", "glyph", "gnarl", "gnash",
        "gnats", "gnaws", "gnome", "goads", "goals", "goats","godly", "goers", "gofers", "going", "golds",
        "golem", "golfs", "golly", "gonad", "gongs", "goods", "goons", "goopy", "gores", "gorge", "gorse",
        "goths", "gouge", "gourd", "gowns", "grabs", "grace", "grade", "grads", "graff", "graft", "grain",
        "grand", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze", "great",
        "greed", "green", "greet", "grief", "grill", "grime", "grind", "gripes", "grits", "groan", "groin",
        "groom", "grope", "gross", "group", "grout", "grove", "growl", "grown", "grows", "grubs", "gruel",
        "gruff", "grump", "grunt", "guano", "guard", "guava", "guess", "guest", "guide", "guild", "guile",
        "guilt", "guise", "gulch", "gulfs", "gulls", "gully", "gulps", "gumbo", "gummy", "gunks", "guppy",
        "gurus", "gushy", "gusts", "gutsy", "guyed", "gypsy", "habit", "hacks", "hails", "hairs", "haled",
        "hales", "halls", "halos", "halts", "hands", "handy", "hangs", "happy", "hardy", "harem", "harks",
        "harms", "harps", "harry", "harsh", "harts", "hasty", "hatch", "hated", "hater", "hates", "hauls",
        "haunt", "haute", "haven", "havoc", "hawks", "hazed", "hazel", "hazer", "hazes", "heads", "heals",
        "heaps", "heard", "heart", "heats", "heave", "heavy", "hedge", "heeds", "heels", "hefts", "heirs",
        "helix", "hello", "helms", "helps", "hence", "herbs", "herds", "heron", "hertz", "hewed", "hider",
        "hides", "highs", "hikes", "hilar", "hills", "hilly", "hilts", "hinds", "hinge", "hints", "hired",
        "hires", "hitch", "hives", "hoagy", "hoard", "hoars", "hobby", "hocus", "holds", "holes", "holly",
        "homed", "homer", "homes", "honed", "hones", "honey", "honks", "honor", "hoods", "hoofs", "hooks",
        "hoops", "horde", "horns", "horny", "horse", "hosed", "hoses", "hosts", "hotly", "hound", "hours",
        "house", "hovel", "hover", "howdy", "howls", "huffs", "huge", "hulls", "human", "humic", "humid",
        "humps", "hunch", "hunks", "hunts", "hurls", "hurry", "hurst", "hurts", "husks", "husky", "hussy",
        "hutch", "hydra", "hyena", "hymns", "hyped", "hypes", "iambs", "icier", "icily", "icing", "icons",
        "ideal", "ideas", "idiom", "idiot", "idled", "idler", "idles", "idols", "igloo", "ihram", "ileum",
        "iliac", "image", "imbue", "impel", "imply", "inane", "inapt", "inbox", "incur", "index", "indie",
        "infer", "infix", "infra", "ingle", "inlay", "inlet", "inner", "input", "inset", "inter", "intro",
        "inure", "iodic", "ionic", "irate", "irked", "irony", "isles", "islet", "issue", "itchy", "items",
        "ivory", "jabot", "jacks", "jaded", "jades", "jails", "jambs", "jaunt", "jawed", "jays", "jazz",
        "jeans", "jeers", "jelly", "jerks", "jests", "jetty", "jewel", "jiffy", "jilts", "jinks", "jived",
        "jives", "jocum", "jocko", "jocks", "joins", "joint", "joist", "joked", "joker", "jokes", "jolly",
        "jolts", "joust", "jowls", "judos", "juicy", "jujus", "julep", "jumbo", "jumps", "jumpy", "junks",
        "junta", "juror", "justs", "jutty", "kabob", "kafir", "kakas", "kales", "kanzu", "karat", "karma",
        "karts", "kasha", "kayak", "kazoo", "kebab", "keels", "keeps", "kefir", "kelly", "kempt", "kenos",
        "kepis", "ketch", "ketch", "keyed", "khaki", "kicks", "kiddy", "kiddo", "kills", "kilos", "kilts",
        "kinda", "kinds", "kiosk", "kited", "kites", "kith", "kitty", "kiwis", "klutz", "knack", "knave",
        "knead", "kneed", "kneel", "knelt", "knife", "knits", "knobs", "knock", "knoll", "knots", "known",
        "knows", "kooky", "korma", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukus", "kurus",
        "kvass", "label", "labor", "laced", "laces", "lacks", "laded", "laden", "ladies", "ladle", "lagos",
        "lairs", "laity", "lakes", "lambs", "lamed", "lames", "lamps", "lance", "lands", "lanes", "lanky",
        "lapel", "lapse", "larch", "lards", "large", "larks", "larva", "lased", "laser", "lases", "lasts",
        "latex", "lathe", "laths", "laugh", "laver", "lawns", "layer", "lazed", "lazes", "leach", "leads",
        "leafy", "leaks", "leaky", "leans", "leant", "leaps", "learn", "lease", "leash", "least", "leave",
        "ledge", "leech", "leeks", "leers", "lefts", "legal", "leger", "leggy", "leis", "lemon", "lends",
        "lenes", "lenis", "lense", "leper", "lepta", "lesbo", "levee", "level", "lever", "lexes", "liars",
        "libel", "liber", "liege", "lifer", "lifts", "light", "liked", "liken", "likes", "lilac", "limbo",
        "limbs", "limed", "limes", "limit", "limns", "limos", "limps", "lined", "linen", "liner", "lines",
        "lingo", "links", "lions", "lipid", "lisle", "lists", "liter", "lithe", "lived", "liver", "lives",
        "livid", "loads", "loafs", "loans", "loath", "lobby", "local", "locks", "locos", "locus", "lodge",
        "lofty", "loges", "logic", "login", "logos", "loins", "loner", "longs", "looks", "looms", "loops",
        "loose", "loped", "lopes", "lords", "loris", "lorry", "loser", "loses", "lotto", "lotus", "louds",
        "louse", "lousy", "loves", "lower", "lowly", "loyal", "lucid", "lucks", "lucky", "lulls", "lumen",
        "lumps", "lumpy", "lunar", "lunch", "lunes", "lunge", "lungs", "lurch", "lured", "lures", "lurid",
        "lusts", "lusty", "lutes", "luxes", "lying", "lymph", "lynch", "lyres", "lyric", "macaw", "macho",
        "macro", "madam", "madly", "magma", "magot", "mails", "maims", "mains", "maize", "major", "makes",
        "males", "malic", "malls", "malts", "mamas", "mambo", "mamma", "maned", "manes", "mange", "mango",
        "mangy", "mania", "manic", "manly", "manna", "manor", "maple", "march", "mares", "marks", "marry",
        "marsh", "masks", "mason", "massy", "match", "mated", "mater", "mates", "maths", "matte", "mauve",
        "maxim", "maybe", "mayor", "mazes", "meals", "mealy", "means", "meant", "meats", "meaty", "medal",
        "media", "medic", "meets", "melds", "melon", "melts", "memos", "menus", "mercy", "meres", "merge",
        "merit", "merry", "mesas", "meshy", "meson", "messy", "metal", "meter", "meths", "metro", "mewed",
        "mezzo", "micas", "micro", "midst", "miffs", "might", "miked", "mikes", "milch", "milds", "miles",
        "milfs", "milks", "mills", "milos", "mimed", "mimes", "mimic", "mince", "minds", "mined", "miner",
        "mines", "minor", "mints", "minus", "mired", "mires", "mirth", "miser", "missy", "mists", "misty",
        "miter", "mites", "mitre", "mitts", "mixed", "mixer", "mixes", "moans", "moats", "mocks", "modal",
        "model", "modes", "mogul", "moils", "moire", "moist", "molar", "molds", "moldy", "moles", "money",
        "monks", "month", "moods", "moody", "moons", "moors", "moose", "moral", "moray", "morel", "morns",
        "morse", "morts", "moses", "mossy", "motel", "motes", "moths", "motif", "motor", "motto", "mound",
        "mount", "mourn", "mouse", "mousy", "mouth", "moved", "mover", "moves", "movie", "mowed", "mower",
        "moxie", "mucks", "mucus", "muffs", "mufti", "muggy", "mulch", "mules", "mulls", "mummy", "mumps",
        "munch", "mural", "murks", "murky", "murre", "mused", "muses", "mushy", "music", "musky", "musts",
        "musty", "muted", "muter", "mutes", "mutts", "muzak", "muzes", "mylar", "mynah", "myths", "nabob",
        "nacho", "nadir", "nails", "naive", "naked", "named", "names", "nanny", "napes", "nappy", "narks",
        "nasal", "nasty", "natal", "natch", "navel", "navvy", "nears", "neath", "necks", "needs", "needy",
        "negro", "neigh", "nerds", "nerve", "nests", "netsy", "never", "newel", "newer", "newly", "newsy",
        "nexts", "nexus", "nicer", "niche", "nicks", "niece", "nifty", "night", "nimbi", "ninny", "ninth",
        "nipsy", "noble", "nobly", "nodal", "nodes", "noddy", "noise", "noisy", "nomad", "nonce", "nooks",
        "noons", "noose", "north", "nosed", "noses", "notch", "noted", "notes", "nouns", "novae", "novel",
        "nudge", "nukes", "nulls", "numbs", "nurse", "nutsy", "oaken", "oases", "oaten", "obese", "obey",
        "occam", "occur", "ocean", "octal", "octet", "odder", "odium", "offer", "often", "ogled", "ogles",
        "oiled", "oiler", "okays", "older", "oldie", "oleum", "olive", "ombre", "omega", "omens", "omits",
        "onery", "onion", "onset", "oohed", "oomph", "ooped", "oozes", "opals", "opens", "opera", "opine",
        "opium", "opted", "optic", "orals", "orate", "orbit", "order", "organ", "orgic", "oriel", "ornis",
        "osier", "other", "otter", "ought", "ounce", "ousts", "outer", "ovals", "ovary", "ovens", "overt",
        "ovoid", "owing", "owlet", "owned", "owner", "oxbow", "oxide", "paced", "pacer", "paces", "packs",
        "pacts", "paddy", "padre", "paean", "pagan", "paged", "pager", "pages", "paint", "pairs", "paled",
        "pales", "palls", "palms", "palsy", "panel", "panic", "pansy", "pants", "papal", "paper", "parch",
        "pardi", "parer", "pares", "parks", "parry", "parse", "parts", "party", "passe", "pasta", "paste",
        "pasts", "pasty", "patch", "pated", "paten", "pater", "pates", "paths", "patio", "patsy", "patty",
        "pause", "paved", "paver", "paves", "pawed", "pawns", "payed", "payee", "payer", "peace", "peach",
        "peaks", "peals", "pearl", "pears", "pease", "peats", "pecan", "pecks", "pedal", "peers", "pekoe",
        "pence", "penes", "pengo", "penis", "penna", "penny", "peons", "peppy", "perch", "perea", "peril",
        "perks", "perky", "pesky", "pesto", "petal", "petit", "petri", "petty", "pewee", "phase", "phial",
        "phlox", "phone", "phony", "photo", "phyla", "piano", "picks", "piece", "piers", "piety", "piggy",
        "piked", "pikes", "pilaf", "pilea", "piled", "piles", "pills", "pilot", "pimps", "pinch", "pined",
        "pines", "pings", "pinko", "pinks", "pinny", "pious", "piped", "piper", "pipes", "pique", "piste",
        "pitch", "piths", "pivot", "pixel", "pixie", "pizza", "place", "plack", "plaid", "plain", "plait",
        "plane", "plank", "plans", "plant", "plash", "plasm", "plate", "plats", "playa", "plays", "plaza",
        "plead", "pleas", "plebe", "plebs", "plena", "plied", "plier", "plies", "plods", "plops", "plots",
        "plows", "ploy", "pluck", "plugs", "plumb", "plume", "plump", "plums", "plunk", "plus", "poach",
        "pocks", "podgy", "poems", "poesy", "poets", "point", "poise", "poked", "poker", "pokes", "pokey",
        "polar", "poled", "poles", "polio", "polka", "polls", "polyp", "ponds", "pones", "pooch", "poofs",
        "poppy", "porch", "pores", "porks", "porno", "ports", "posed", "poser", "poses", "posse", "posts",
        "potty", "pouch", "pound", "pours", "pouts", "power", "poxes", "prams", "prank", "prate", "prawn",
        "prays", "preen", "press", "prest", "preys", "price", "prick", "pride", "pried", "pries", "prime",
        "primp", "print", "prior", "prise", "privy", "prize", "probe", "prods", "prof", "progs", "promo",
        "prone", "prong", "proof", "props", "prose", "prowl", "prows", "proxy", "prude", "prune", "psalm",
        "pseud", "pssst", "pubes", "pubic", "pucks", "pudgy", "puffs", "puled", "pules", "pulps", "pulse",
        "pumas", "pumps", "punks", "punny", "punts", "pupal", "pupas", "puppy", "puree", "purer", "purge",
        "purls", "pursy", "pushy", "pussy", "putts", "putty", "pygmy", "pylon", "quack", "quads", "quaff",
        "quail", "quake", "qualm", "quant", "quare", "quark", "quash", "quasi", "quate", "quays", "quean",
        "queen", "queer", "quell", "query", "quest", "queue", "quick", "quiet", "quiff", "quill", "quilt",
        "quint", "quips", "quire", "quirk", "quirt", "quite", "quits", "quota", "quote", "rabbi", "rabid",
        "raced", "racer", "races", "racks", "radar", "radii", "radio", "radius", "raffs", "rafts", "raged",
        "rages", "raids", "rails", "rains", "rainy", "raise", "rajah", "raken", "rakes", "rally", "ramen",
        "ramie", "ramps", "ranch", "range", "rangy", "ranks", "rants", "raped", "raper", "rapes", "rapid",
        "rarer", "rased", "rases", "rasps", "raspy", "rated", "rates", "ratio", "ratty", "raved", "ravel",
        "raven", "raver", "raves", "rawer", "rayon", "razed", "razee", "razer", "razes", "reach", "react",
        "reads", "ready", "reais", "realm", "reams", "reaps", "rearm", "rears", "rebar", "rebel", "rebus",
        "rebut", "recap", "recur", "redds", "redid", "redoes", "redox", "redry", "reeds", " reefs", "reek",
        "reel", "refer", "refit", "refry", "regal", "rehab", "reign", "reins", "relax", "relay", "relic",
        "remap", "remit", "renal", "rends", "renew", "repay", "repel", "reply", "reran", "rerun", "reset",
        "resin", "rests", "retch", "retro", "retry", "revel", "revue", "rheas", "rheum", "rhino", "rhyme",
        "rider", "rides", "ridge", "riffs", "rifle", "rifts", "right", "rigid", "riled", "riles", "rills",
        "rimed", "rimes", "rinds", "rings", "rinks", "rinse", "riots", "ripen", "riper", "risen", "riser",
        "rises", "risks", "risky", "rites", "rival", "river", "rivet", "roach", "roads", "roams", "roars",
        "roast", "robed", "robes", "robin", "robot", "rocks", "rocky", "rodeo", "rogue", "rolls", "romps",
        "roofs", "rooms", "roomy", "roost", "roots", "roped", "ropes", "rosed", "roses", "rotor", "rouge",
        "rough", "round", "rouse", "route", "routs", "rowan", "rowdy", "rowed", "rower", "royal", "rubes",
        "ruble", "ruddy", "ruder", "ruffs", "rugby", "ruing", "ruins", "rumba", "rumen", "rummy", "rumor",
        "runes", "rungs", "runny", "runts", "rural", "ruses", "rushy", "rusts", "rusty", "ruths", "ryots",
        "sable", "sacks", "sadly", "safes", "sagas", "sages", "saggy", "sahib", "sails", "saint", "sakes",
        "salad", "sales", "sally", "salon", "salsa", "salts", "salty", "salve", "samek", "sands", "sandy",
        "saner", "sappy", "sarge", "saris", "sassy", "satay", "sated", "sates", "sauce", "saucy", "sauna",
        "saute", "saved", "saver", "saves", "savor", "savvy", "sawed", "sawer", "says", "scabs", "scads",
        "scags", "scale", "scalp", "scaly", "scamp", "scams", "scans", "scant", "scarf", "scars", "scary",
        "scats", "scene", "scent", "scoff", "scold", "scone", "scoop", "scoot", "scope", "scops", "score",
        "scorn", "scots", "scour", "scout", "scowl", "scrag", "scram", "scrap", "scree", "screw", "scrip",
        "scrub", "scrum", "scuba", "scuds", "scuff", "scull", "scums", "seals", "seams", "sears", "seats",
        "sects", "sedan", "seder", "sedge", "seeds", "seeks", "seems", "seeps", "seers", "segue", "seize",
        "selfs", "sells", "semen", "sends", "sense", "sents", "sepia", "sepoy", "serfs", "serge", "serif",
        "serum", "serve", "servo", "setup", "seven", "sever", "sewed", "sewer", "sexed", "sexes", "shack",
        "shade", "shads", "shady", "shaft", "shags", "shake", "shako", "shale", "shall", "shalt", "shame",
        "shams", "shank", "shape", "shaps", "shard", "share", "shark", "sharp", "shawl", "sheaf", "shear",
        "sheds", "sheen", "sheep", "sheer", "sheet", "sheik", "shelf", "shell", "shied", "shies", "shift",
        "shill", "shine", "shins", "shiny", "ships", "shirt", "shits", "shlep", "shone", "shook", "shoot",
        "shops", "shore", "shorn", "short", "shout", "shove", "shown", "showy", "shred", "shrew", "shrub",
        "shrug", "shuck", "shun", "shunt", "shush", "shuts", "sices", "sicko", "sides", "sidle", "siege",
        "sieve", "sighs","sight", "sigma", "signs", "silks", "silky", "sills", "silly", "silos", "silts",
        "since", "sines", "sinew", "singe", "sings", "sinks", "sinus", "sired", "siren", "sires", "sirup",
        "sisal", "sissy", "sitar", "sited", "sites", "skate", "skein", "skews", "skids", "skied", "skier",
        "skies", "skill", "skimp", "skins", "skips", "skirt", "skits", "skuas", "slack", "slags", "slain",
        "slake", "slams", "slang", "slant", "slaps", "slash", "slate", "slats", "slays", "sleds", "sleek",
        "sleep", "sleet", "slept", "slice", "slick", "slide", "slims", "slime", "slims", "sling", "slink",
        "slips", "slipt", "slits", "slobs", "sloes", "slogs", "sloop", "slops", "slope", "slots", "slows",
        "slued", "slues", "slugs", "slump", "slums", "slung", "slunk", "slurp", "slurs", "slush", "slyer",
        "smack", "small", "smart", "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", "smith",
        "smock", "smogs", "smoke", "smoky", "smolt", "smote", "smuts", "snack", "snags", "snail", "snake",
        "snaps", "snare", "snark", "snarl", "snash", "sneak", "sneck", "sneer", "snell", "snick", "snide",
        "sniff", "snipe", "snips", "snits", "snobs", "snood", "snoop", "snoot", "snore", "snort", "snout",
        "snows", "snowy", "snubs", "snuck", "snuff", "snugs", "soaks", "soaps", "soars", "soave", "sober",
        "socks", "sodas", "sofas", "softa", "softs", "soils", "solar", "soles", "solid", "solon", "solve",
        "songs", "sonic", "sonly", "sooth", "soots", "sorbs", "sords", "sorel", "sorex", "sorry", "sorts",
        "sough", "souls", "sound", "soups", "sours", "souse", "south", "sowed", "sower", "space", "spade",
        "spank", "spare", "spark", "spasm", "spate", "spawn", "speak", "spear", "speck", "speed", "spell",
        "spend", "spent", "sperm", "spice", "spicy", "spied", "spies", "spike", "spiky", "spill", "spilt",
        "spine", "spins", "spire", "spite", "splat", "splay", "split", "spoil", "spoke", "spoof", "spook",
        "spool", "spoon", "spore", "sport", "spots", "spout", "sprag", "spray", "spree", "sprig", "spume",
        "spunk", "spurn", "spurs", "squad", "squat", "squib", "stack", "staff", "stage", "stags", "stain",
        "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stang", "stank", "staph", "stare",
        "stark", "stars", "start", "stash", "state", "stats", "stave", "stays", "stead", "steak", "steal",
        "steam", "steed", "steel", "steep", "stem", "step", "stern", "stews", "stick", "stiff", "still",
        "stilt", "sting", "stink", "stint", "stipe", "stirs", "stock", "stogy", "stoke", "stole", "stomp",
        "stone", "stony", "stood", "stool", "stoop", "stops", "store", "stork", "storm", "story", "stoup",
        "stout", "stove", "stows", "strap", "straw", "stray", "strep", "strew", "strip", "strum", "strut",
        "stubs", "stuck", "studs", "study", "stuff", "stump", "stung", "stuns", "stunt", "styed", "style",
        "styes", "suave", "sugar", "suing", "suite", "sulfa", "sulks", "sumac", "summa", "sunny", "sunup",
        "super", "surer", "surfs", "surge", "surly", "sushi", "swabs", "swags", "swain", "swale", "swami",
        "swamp", "swank", "swans", "swaps", "sward", "swarm", "swart", "swath", "sways", "swear", "sweat",
        "sweed", "sweep", "sweet", "swell", "swept", "swift", "swigs", "swill", "swims", "swine", "swing",
        "swipe", "swirl", "swish", "swoon", "swoop", "swore", "sworn", "swots", "swung", "sylph", "synch",
        "synod", "syren", "syrup", "tabby", "table", "taboo", "tacit", "tacks", "tacos", "tacts", "taffy",
        "tails", "taint", "taken", "taker", "takes", "talcs", "tales", "talks", "tally", "talon", "tamed",
        "tamer", "tames", "tamps", "tango", "tangs", "tanks", "taped", "taper", "tapes", "tapir", "tardy",
        "tared", "tares", "tarns", "taros", "tarps", "tarry", "tarts", "tasks", "tasse", "taste", "tasty",
        "tater", "tatty", "taunt", "taupe", "tawny", "taxed", "taxes", "taxis", "teach", "teaks", "teals",
        "teams", "tears", "tease", "teems", "teeth", "tells", "tempo", "temps", "tench", "tends", "tenet",
        "tenon", "tenor", "tense", "tents", "terms", "terns", "terra", "terse", "tests", "testy", "tetra",
        "texts", "thank", "thaws", "theft", "their", "theme", "there", "these", "theta", "thick", "thief",
        "thigh", "thins", "thing", "think", "thins", "third", "thong", "thorn", "those", "three", "threw",
        "throb", "throw", "thrum", "thuds", "thugs", "thumb", "thump", "thyme", "tiara", "tibia", "ticks",
        "tidal", "tided", "tides", "tiers", "tight", "tikka", "tiles", "tills", "tilth", "timer", "times",
        "timid", "tinct", "tinge", "tinny", "tints", "tipsy", "tired", "tires", "titan", "tithe", "title",
        "tizzy", "toads", "toast", "today", "toddy", "toffy", "togae", "togas", "toils", "token", "toked",
        "tokes", "tolls", "tombs", "tonal", "toned", "toner", "tones", "tongs", "tonic", "tools", "tooth",
        "toots", "topaz", "topic", "torch", "torii", "torso", "torte", "torts", "total", "touch", "tough",
        "tours", "touts", "towed", "towel", "tower", "towns", "toxic", "toxin", "trace", "track", "tract",
        "trade", "trail", "train", "trait", "tramp", "traps", "trash", "trawl", "trays", "tread", "treat",
        "treed", "trees", "trend", "tress", "triad", "trial", "tribe", "trick", "tried", "trier", "tries",
        "trill", "trims", "trios", "tripe", "trite", "troll", "tromp", "troop", "trope", "trout", "trove",
        "truce", "truck", "trued", "truer", "trues", "truly", "trump", "trunk", "truss", "trust", "truth",
        "tryst", "tsars", "tubas", "tubby", "tuber", "tucks", "tufas", "tuffs", "tufts", "tuina", "tules",
        "tulip", "tulle", "tumid", "tummy", "tumor", "tunas", "tuned", "tuner", "tunes", "tunic", "tunny",
        "tuple", "turbo", "turds", "turfs", "turns", "tushy", "tutor", "tutti", "tutus", "tuxes", "twain",
        "twang", "tweak", "tweed", "tweet", "twerp", "twice", "twigs", "twill", "twine", "twink", "twins",
        "twirl", "twist", "tying", "tykes", "typey", "typos", "tyros", "udder", "ulcer", "ultra", "umbra",
        "uncle", "under", "undid", "undue", "unfed", "unfit", "unify", "union", "unite", "unity", "units",
        "unlit", "unmet", "unpeg", "unpen", "unpin", "unsay", "untie", "until", "unwed", "unzip", "upend",
        "upped", "upper", "upset", "urban", "urged", "urges", "urine", "usage", "users", "usher", "using",
        "usual", "usurp", "usury", "uteri", "utile", "utter", "uvula", "vague", "vails", "vales", "valet",
        "valid", "valor", "value", "valve", "vamps", "vanes", "vapid", "vapor", "varys", "vases", "vault",
        "vaunt", "veals", "veeps", "veers", "vegan", "veils", "veins", "velar", "velds", "velum", "venal",
        "vends", "venom", "vents", "venue", "verbs", "verge", "verse", "verso", "verst", "verts", "verve",
        "vetch", "vexed", "vexes", "vials", "vicar", "video", "views", "vigil", "vigor", "viler", "villa",
        "villi", "vines", "vinyl", "viola", "viper", "viral", "vireo", "virtu", "virus", "visas", "visit",
        "visor", "vista", "vital", "vivas", "vivid", "vixen", "vizir", "vocal", "vodka", "vogue", "voice",
        "voids", "voila", "voles", "volta", "vomit", "voted", "voter", "votes", "vouch", "vowed", "vowel",
        "vroom", "wafer", "waged", "wager", "wages", "wagon", "waifs", "wails", "waist", "waits", "waked",
        "waken", "wakes", "walks", "walls", "waltz", "wands", "wanes", "wanna", "wants", "wards", "wares",
        "warmly", "warms", "warns", "warps", "warts", "wary", "washy", "wasps", "waste", "watch", "water",
        "watts", "waved", "waver", "waves", "waxed", "waxen", "waxes", "wears", "weary", "weave", "wedge",
        "weeds", "weeks", "weens", "weeps", "weepy", "wefts", "weigh", "weird", "weirs", "welch", "welds",
        "wells", "welsh", "welts", "wench", "wends", "wersh", "wests", "whack", "whale", "whams", "wharf",
        "wheal", "wheat", "wheel", "whelp", "whence", "where", "which", "while", "whims", "whine", "whips",
        "whirs", "whisk", "whist", "white", "whits", "whole", "whomp", "whose", "wicks", "widen", "wider",
        "widow", "width", "wield", "wiles", "wills", "wilts", "wimps", "winds", "windy", "wined", "wines",
        "wings", "winks", "wiped", "wiper", "wipes", "wired", "wires", "wised", "wiser", "wises", "wishy",
        "wisps", "wists", "witch", "withy", "witty", "wived", "wiver", "wives", "wodge", "woful", "woken",
        "wolds", "wombs", "women", "womyn", "wonks", "woods", "woofs", "words", "wordy", "works", "world",
        "worms", "worry", "worse", "worst", "worth", "wotst", "would", "wound", "woven", "wowed", "wraps",
        "wrath", "wreak", "wreck", "wrens", "wrest", "wring", "wrist", "write", "writs", "wrong", "wrote",
        "wroth", "wrung", "wryly", "yacht", "yacks", "yager", "yagis", "yanks", "yappy", "yards", "yarns",
        "yawed", "yawls", "yawns", "yeahs", "yearn", "years", "yeast", "yells", "yelps", "yenta", "yente",
        "yepes", "yesty", "yield", "yipes", "yodel", "yodhs", "yokel", "yokes", "yolks", "yours", "youth",
        "yowls", "yucca", "yummy", "yurts", "zaire", "zappy", "zazen", "zeals", "zebus", "zeros", "zests",
        "zesty", "zippy", "zonal", "zoned", "zoner", "zones", "zooms"
      ];
      
      
  
    let word; //since we are not using an API key, we will use a default word
    let availableSpace = 1;
    let guessedWordCount = 0;
    let guessWords = [[]];
  
    createBoard();
    pickNewWord();
  
    // On-screen keyboard
    document.querySelectorAll('.keyboard-row button').forEach(key => {
      key.addEventListener('click', ({ target }) => {
        const k = target.getAttribute('data-key');
        if (k === 'enter') {
          handleSubmitWord();
        } else if (k === 'backspace') {
          deleteLetter();
        } else {
          addLetter(k);
        }
      });
    });
  
    // Physical keyboard
    document.addEventListener('keydown', e => {
      const k = e.key.toLowerCase();
      if (k === 'enter') {
        handleSubmitWord();
      } else if (k === 'backspace') {
        deleteLetter();
      } else if (/^[a-z]$/.test(k)) {
        addLetter(k);
      }
    });
  
    function pickNewWord() {
      if (!KEY || KEY === '<YOUR_KEY_GOES_HERE>') {
        word = LOCAL_WORDS[Math.floor(Math.random() * LOCAL_WORDS.length)];
        return;
      }
      fetch(
        'https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=5&lettersMax=5',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
            'x-rapidapi-key': KEY,
          },
        }
      )
        .then(res => res.json())
        .then(data => {
          word = data.word;
        })
        .catch(() => {
          word = LOCAL_WORDS[Math.floor(Math.random() * LOCAL_WORDS.length)];
        });
    }
  
    function createBoard() {
      const board = document.getElementById('board');
      for (let i = 1; i <= 30; i++) {
        const square = document.createElement('div');
        square.classList.add('square', 'animate__animated');
        square.id = String(i);
        board.appendChild(square);
      }
    }
  
    function getCurrentRow() {
      return guessWords[guessWords.length - 1];
    }
  
    function addLetter(letter) {
      const row = getCurrentRow();
      if (row.length < 5) {
        row.push(letter);
        document.getElementById(String(availableSpace)).textContent = letter;
        availableSpace++;
      }
    }
  
    function deleteLetter() {
      const row = getCurrentRow();
      if (row.length > 0) {
        row.pop();
        availableSpace--;
        document.getElementById(String(availableSpace)).textContent = '';
      }
    }
  
    function getTileColor(idx, letter) {
      if (word[idx] === letter)       return 'rgb(83, 141, 78)';
      if (word.includes(letter))      return 'rgb(181, 159, 59)';
      return 'rgb(58, 58, 60)';
    }

    function revealGuess(row) {
      const startId = guessedWordCount * 5 + 1;
      row.forEach((letter, idx) => {
        setTimeout(() => {
          const tile = document.getElementById(String(startId + idx));
          const color = getTileColor(idx, letter);
          tile.classList.add('animate__flipInX');
          tile.style.backgroundColor = color;
          tile.style.borderColor = color;
        }, idx * 250); //250ms delay for each letter
      });
      guessedWordCount++;
      if (row.join('') === word) {
        return alert('Congratulations!');
      }
      if (guessedWordCount === 6) {
        return alert(`No more guesses – the word was “${word}.”`);
      }
      guessWords.push([]);
    }
  
    function handleSubmitWord() {
      const row = getCurrentRow();
      if (row.length !== 5) {
        return alert('Word must be 5 letters');
      }
      const guess = row.join('');
  
      // If no valid API key, validate locally
      if (!KEY || KEY === '<YOUR_KEY_GOES_HERE>') {
        if (!LOCAL_WORDS.includes(guess)) {
          return alert('Sorry! The word is not in the local dictionary.');
        }
        return revealGuess(row);
      }
  
      // Otherwise check via WordsAPI
      fetch(`https://wordsapiv1.p.rapidapi.com/words/${guess}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
          'x-rapidapi-key': KEY,
        },
      })
        .then(res => {
          if (!res.ok) throw Error();
          revealGuess(row);
        })
        .catch(() => {
          alert('Word not recognized!');
        });
    }
  });
  