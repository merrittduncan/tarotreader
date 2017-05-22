$(document).ready(function() {
    // register our function as the "callback" to be triggered by the form's submission event
    $("#cardSubmit").submit(drawCards); // in other words, when the form is submitted, fetchAndDisplayGif() will be executed
});

var CARDS =[
 {
   "frenchName": "le Bateleur",
   "englishName": "The Magician",
   "suit": "Major",
   "order": "1",
   "description": "The start of something. Beginner’s luck. Having various tools and means at our disposal. Use of supernatural forces. Creating reality with mind power. Training and acquisition of practical skills. Improvisation. Display or show for other people. ",
   "inverse description": "Trickery, sleight of hand, cheating. Showing off, pretending. Lack of self-awareness about body, sexuality, or basic motives. Near miss due to inexperience or inaccuracy.",
   "keyword": ""
 },
 {
   "frenchName": "la Papesse",
   "englishName": "The Popess",
   "suit": "Major",
   "order": "2",
   "description": "Wisdom combining intellect and intuition. A spiritual mother. A woman hiding her strengths in a world of men. Modesty. Secrets, something hidden, mystery. Getting a hint of something which remains largely unknown. Impossible to give a definite answer now. ",
   "inverse description": "Need to hide our true nature behind the conventions of normal society. Conservative approach to sex and the body. Emotional blockage.",
   "keyword": ""
 },
 {
   "frenchName": "l'Imperatrice",
   "englishName": "The Empress",
   "suit": "Major",
   "order": "3",
   "description": "Abundance, growth, productivity. Natural or human touch within an artificial framework. Emotional intelligence. Protection and care. Motherhood. A powerful female figure. Strong feminine identity. ",
   "inverse description": "Impulsive behavior, someone difficult to reason with. Over-protectiveness, excessive involvement in the life of others. Problems with a strong mother figure.",
   "keyword": ""
 },
 {
   "frenchName": "l'Emporer",
   "englishName": "The Emporer",
   "suit": "Major",
   "order": "4",
   "description": "Practical and material achievements. Matters relating to the workplace or source of income. Authority and control, a commanding position. A protective father figure, patron or sponsor. Assertiveness. Military affairs. ",
   "inverse description": "Belligerence, violence, trying to solve things by brute force. Dictatorship. Possibility of sexual abuse. Difficulty in coping with a dominant father figure. Denial and hiding of inner weaknesses.",
   "keyword": ""
 },
 {
   "frenchName": "le Pape",
   "englishName": "The Pope",
   "suit": "Major",
   "order": "5",
   "description": "Teacher, instructor, or counselor. Education and knowledge, academic expertise. Organized religion, conventional medicine or psychology. Spiritual father. Consultation or treatment by a specialist. Marriage.",
   "inverse description": "Excessive adhesion to conventions and outdated norms. Bureaucracy, an oppressive establishment. Hypocrisy, discrimination. Divorce.",
   "keyword": ""
 },
 {
   "frenchName": "l'Amoureux",
   "englishName": "The Lover",
   "suit": "Major",
   "order": "6",
   "description": "Love, amorous relationship. Emotional entanglement. Need to make a choice, or to disengage oneself from past influences. Inclinations of the heart correspond to the will of heaven. Small steps actually taken are the visible signs of inner desire. ",
   "inverse description": "Complex relationship between several people, e.g., a romantic triangle or a tension between mother and wife. Hesitation, quandary. Confusion as to one’s own feeling and will.",
   "keyword": ""
 },
 {
   "frenchName": "le Chariot",
   "englishName": "The Chariot",
   "suit": "Major",
   "order": "7",
   "description": "Victory or an achievement putting the querent in a strong and protected position. Ambition, energy, motivation to move forward. Public honor. Power and high status.",
   "inverse description": "Inner weakness hidden behind external show-off. Arrogance, vanity. Over-protectiveness, emotional closure. Confusion about one’s goals. Losing the simple touch with people and reality.",
   "keyword": ""
 },
 {
   "frenchName": "la Justice",
   "englishName": "Justice",
   "suit": "Major",
   "order": "8",
   "description": "Law and order, legal and court issues. A fair and balanced judgment. A developed conscience. Rationality, reasoning by clear rules and common norms. Touch of grace and humanity beyond the objective considerations.",
   "inverse description": "Petty accountability, a critical and judgmental attitude, guilt feelings. Repressive control of self and of others. Negative ideas blocking change and advance.",
   "keyword": ""
 },
 {
   "frenchName": "l'Hermite",
   "englishName": "The Hermit",
   "suit": "Major",
   "order": "9",
   "description": "A quest for truth or for spiritual understanding. Concentrating on a clear purpose. Caution, careful examination. Self-privation for the sake of a meaningful cause. Loyalty to principles, strong faith.",
   "inverse description": "A closed and reclusive attitude. Isolation, loneliness. Fixed ideas. Excessive caution and suspicion, a critical approach looking for defects. Hidden and denied desires.",
   "keyword": ""
 },
 {
   "frenchName": "la Roue de Fortune",
   "englishName": "The Wheel of Fortune",
   "suit": "Major",
   "order": "10",
   "description": "Change in circumstances and position. A rise after a fall. Gambling, putting faith in capricious luck. Life cycles, closure of circles. Adapting to the routine of everyday life. A hint to previous incarnations.",
   "inverse description": "A decline after a period of rising. Danger lurks at the summit. Moving in a closed circle. Capricious mood changes. Feeling powerless to affect one’s situation.",
   "keyword": ""
 },
 {
   "frenchName": "la Force",
   "englishName": "The Force",
   "suit": "Major",
   "order": "11",
   "description": "Power and courage to face challenges. Controlled expression of creative urges, drives and desires. Mobilization of inner resources towards a common goal. Taking risks.",
   "inverse description": " Need to keep things under control leads to constant tensions. A risk of losing one’s grip. Internal conflicts and unrealistic assessment of one’s own forces may lead to failure.",
   "keyword": ""
 },
 {
   "frenchName": "le Pendu",
   "englishName": "The Hanged Man",
   "suit": "Major",
   "order": "12",
   "description": "Seeing things from a unique point of view. Enduring difficulties for a worthy cause. A period of deep self examination. Passivity, acceptance of reality even if it is the opposite of what one expects.",
   "inverse description": "Isolation. Emotional stance of a victim. Inability to act. Denying one’s own unique qualities, striving to be “normal” at all costs. Living in one’s private and imaginary reality.",
   "keyword": ""
 },
 {
   "frenchName": "la Mort",
   "englishName": "Death",
   "suit": "Major",
   "order": "13",
   "description": "The end of something whose time has come. Cutting off past influences or attachment to dominant figures. Giving up the superfluous and keeping only the essential. Disintegration of the old makes room for the new.",
   "inverse description": "Difficulty in coping with loss or change. Temporary difficulties, a trying challenge. Disintegration. Realization of a painful truth. Does not predict future death, but may reflect anxiety about dying or mourning over a loss which has already happened.",
   "keyword": ""
 },
 {
   "frenchName": "la Temperance",
   "englishName": "Temperance",
   "suit": "Major",
   "order": "14",
   "description": "Reconciliation, compromise, relaxation of tensions. Integration of opposites. Ability to do the seemingly impossible. A slow process of distillation and improvement. Patience, perseverance. Self-improvement.",
   "inverse description": "Going back and forth without making real progress. Losing patience with a lengthy process. Emotional preoccupation with oneself, pushing away others who might come to help.",
   "keyword": ""
 },
 {
   "frenchName": "le Diable",
   "englishName": "The Devil",
   "suit": "Major",
   "order": "15",
   "description": "A burst of creativity. Paradoxes and contradictions. Irony and mocking of common norms. Acting from desires, passions and impulses. Moving on from a past family trauma.",
   "inverse description": "Temptation, attraction to the dark and forbidden. Exploitation, egotism, domination. Compulsive self-gratification. Senseless behavior has its price. Difficulty in detaching oneself from an unhealthy bond.",
   "keyword": ""
 },
 {
   "frenchName": "la Maison Dieu",
   "englishName": "The Tower",
   "suit": "Major",
   "order": "16",
   "description": "Breaking up of solid structures. Getting free from confinement. Sudden breakthrough after long preparations. Sparkling sexual encounter. Success lies in simplicity and modesty.",
   "inverse description": "Shock, collapse of projects or trusted structures. A fall from an apparently solid and secure position. Chaos, confusion, difficulty in understanding what is going on. Vanity and pride lead to failure.",
   "keyword": ""
 },
 {
   "frenchName": "l'Étoile",
   "englishName": "The Star",
   "suit": "Major",
   "order": "17",
   "description": "Openness, simplicity, return to nature. Purity, honesty. Showing yourself “as you are,” accepting one’s body and desires. Generosity. Luck from heaven. Intuitive feeling of guidance or energy coming from a higher plane.",
   "inverse description": "Naive optimism and wishful-thinking. Exposing oneself to danger or abuse. Difficulty in setting proper boundaries. Squandering, wastefulness.",
   "keyword": ""
 },
 {
   "frenchName": "la Lune",
   "englishName": "The Moon",
   "suit": "Major",
   "order": "18",
   "description": "Deep emotions, perhaps related to a mother or feminine figure. A different experience of reality. Longing for the unreachable. Finding one’s hidden strengths. Occupation with the remote past. A hidden treasure.",
   "inverse description": "Vague and disturbing feelings. Emotional difficulties, a period of depression. Danger lurking under the surface. Retreat, the road ahead is hard to find.",
   "keyword": ""
 },
 {
   "frenchName": "le Soileil",
   "englishName": "The Sun",
   "suit": "Major",
   "order": "19",
   "description": "Light and warmth, abundance, blessings. Pleasant feeling, emotional or physical healing. Partnership, trust, sharing, brotherhood. Human touch. An ideal father figure. Matters relating to children. Setting limits in a moderate and non-oppressive way.",
   "inverse description": "Living in a limited space, difficulty to face reality “in the open.” Immaturity, dependence on others. Someone or something too intense and energetic to feel comfortable with. An absent father.",
   "keyword": ""
 },
 {
   "frenchName": "le Jugement",
   "englishName": "Judgement",
   "suit": "Major",
   "order": "20",
   "description": "Revelation, enlightenment, a new understanding. A turning point in a therapy process. Healing of a family relationship. Disclosure, secrets revealed, publicity. Birth of a baby or of a new thing.",
   "inverse description": "Revelation of something that should have been kept hidden. Lack of privacy. Unpleasant realization. Problems related to child-parent relations. Too much noise and drama.",
   "keyword": ""
 },
 {
   "frenchName": "le Monde",
   "englishName": "The World",
   "suit": "Major",
   "order": "21",
   "description": "Completion of a process. Balanced activity and achievements in various domains. Contact with far places. Harmony and correspondence between different planes. Pregnancy, something new is about to be born. The Dance of Life.",
   "inverse description": "Life in a bubble, difficulty in sharing your world with others. Disconnection of inner feelings from external life. Preoccupation with oneself, idealized self-image, inability to move forward.",
   "keyword": ""
 },
 {
   "frenchName": "le Mat",
   "englishName": "The Fool",
   "suit": "Major",
   "order": "",
   "description": "Freedom from conventions and norms. Something or someone unique and exceptional. Options kept open. Giving up control, spontaneity. Uncertainty, attention to the here and now. Going on a trip.",
   "inverse description": "Difficulty in choosing and committing oneself to something stable. Restlessness. Lack of purpose. Getting lost. Foolish behavior. Eccentricity, lack of acceptance by the social environment. Difficulty in planning ahead. ",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "Ace",
   "description": "A good start in material things. Financial and physical stability. A practical perspective. A significant sum of money. Utilitarian approach. Greed. Something basic and unsophisticated.",
   "inverse description": "A good start in material things. Financial and physical stability. A practical perspective. A significant sum of money. Utilitarian approach. Greed. Something basic and unsophisticated.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "2",
   "description": "Duality. Two options or two elements. Collaborating while keeping distance. A winding road, advancing in complex ways. Recognition and acknowledgment.",
   "inverse description": "Duality. Two options or two elements. Collaborating while keeping distance. A winding road, advancing in complex ways. Recognition and acknowledgment.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "3",
   "description": "Product. A partnership or an alliance bears fruit. First results of a project. Good prospects.",
   "inverse description": "Disappointment, a partnership or a project does not bear the expected fruits.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "4",
   "description": "Stability. Solid material assets. Tradition, reputation and honor. Time-tested reliability. Established social institutions.",
   "inverse description": "Conservatism, clinging to old and outdated patterns.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "5",
   "description": "Disruption. Something new appears and destabilizes existing structures. A new element gets attention, but also awakens resistance.",
   "inverse description": "Disruption. Something new appears and destabilizes existing structures. A new element gets attention, but also awakens resistance.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "6",
   "description": "Expansion. Abundance of resources and possible ways to advance. A positive outlook, success. A good balance between stability and movement.",
   "inverse description": "Expansion. Abundance of resources and possible ways to advance. A positive outlook, success. A good balance between stability and movement.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "7",
   "description": "Acceptance. Something new is well received. Help and protection. Integrating into a system without losing one’s individuality.",
   "inverse description": "Lack of independence, need to rely on help and acceptance from others.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "8",
   "description": "Uniformity. A mechanical structure. Practical considerations prove efficient, but lack a human touch. Routine work. A slow and patient advance.",
   "inverse description": "Uniformity. A mechanical structure. Practical considerations prove efficient, but lack a human touch. Routine work. A slow and patient advance.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "9",
   "description": "Motivation. Carving a niche for oneself in an existing system. Ambition. Endurance and independent thinking bear long-term fruits.",
   "inverse description": "Motivation. Carving a niche for oneself in an existing system. Ambition. Endurance and independent thinking bear long-term fruits.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "10",
   "description": "Abundance. Intensive activity in practical affairs. Material success and achievements. Some may be getting more than others.",
   "inverse description": "Abundance. Intensive activity in practical affairs. Material success and achievements. Some may be getting more than others.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "Page",
   "description": "A practical endeavor. Untapped potentials are within reach. Tangible success at the beginning. A solid material base for further advancement.",
   "inverse description": "hesitation, lack of clear purpose. Thinking in terms of past achievements misses present opportunities.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "Knight",
   "description": "Advancement in a practical direction. A productive expression of creativity. A clear goal in sight.",
   "inverse description": "Constant pursuit of money, without reaching material stability. Passions and desires may interfere with practical plans.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "Queen",
   "description": "Tangible assets, material and personal stability, a sober and realistic vision. Looking at things from a practical and pragmatic perspective.",
   "inverse description": "Conservatism, resistance to change, aiming only to preserve the existing assets. Looking at things only from the material perspective.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Coins",
   "order": "King",
   "description": "Confidence and security, a cautious but optimistic vision. Looking for new achievements while holding existing assets secure.",
   "inverse description": "Dissatisfaction with what one already has. Disregard of the good things in the present situation. A limited outlook.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "Ace",
   "description": "The beginning of a love relationship. Expression of warm feelings. Romantic longing for something extraordinary. Emotional and spiritual growth.",
   "inverse description": "motional dryness, feeling oneself empty. Avoidance of intimacy, negative feelings, heartbreak.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "2",
   "description": "Partnership. A romantic relationship or a close personal alliance. Interpersonal dynamics based on social norms. Passion in a love relationship, which may turn against itself.",
   "inverse description": "A crisis in a couple relationship, disappointment with someone close to you.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "3",
   "description": "Birth. Something new brings joy and happiness. Caring for a child. Issues of child-parent relations. A common project motivated by feelings and not only by interests.",
   "inverse description": "Problems in relations with one’s parents, or with one’s child. A strong alliance of two persons leaves a third one outside.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "4",
   "description": "Family. A collective of people (family, community etc.) with a history and a sense of belonging. Commitment to a group, at the price of giving up personal interests.",
   "inverse description": "Problems and discord in the family or in a long-lasting community. A fixed social structure which doesn’t allow for adaptation or flexibility.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "5",
   "description": "Links. Popularity, relations with many people. Becoming the center of attention in a group. Relying on connections with other people to advance oneself or to overcome difficulties.",
   "inverse description": "Excessive preoccupation with social activity. Losing oneself in multiple superficial connections. Cultivating virtual instead of real contacts.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "6",
   "description": "Continuity. A long-term relationship. Repetition between different generations in the family. A stable personal alliance.",
   "inverse description": "Monotony, tedious repetition. Falling time and again into the same emotional traps.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "7",
   "description": "Individuality. A single person finding his place in a group. Contact with people in high positions. Exceptional qualities are appreciated.",
   "inverse description": "Problems of integration in a group or an organization. Being part of a collective, but feeling isolated and estranged.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "8",
   "description": "Involvement. Developing personal relationships within a group. A favorable human-relations environment. A feast or a family event.",
   "inverse description": "Interference of the environment in a couple’s relationships. Pressures from one’s family in romantic or personal matters.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "9",
   "description": "Collectivity. A group or organization working harmoniously with everyone finding his proper place. Accepting one’s role in a social environment. Happiness, wishes coming true.",
   "inverse description": "A confusing social situation, difficulty in situating oneself within a complex environment.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "10",
   "description": "Leadership. A person with special qualities receives appreciation and high status. Assuming responsibility for others. Maintaining a superior position.",
   "inverse description": "A fallen leader, loss of popularity. Disappointment because of ingratitude by people one has helped.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "Page",
   "description": "First and unsure steps in a romantic endeavor. Shyness. Sincere intentions. Trying to figure out one’s feelings.",
   "inverse description": "Over-absorption in one’s personal feelings, losing contact with others. Sloppiness in practical affairs.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "Knight",
   "description": "A romantic gesture, offering one’s heart, courting. Openness, sincerity, a simple heart. A potential lover may appear.",
   "inverse description": "Superficial and unstable feelings. An over-optimistic but unrealistic attitude. An overt display of shallow or insincere feelings. ",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "Queen",
   "description": "A rich inner world which is kept hidden. Guarding one’s privacy or valuable assets. Strong feelings held under control.",
   "inverse description": "Closure, defensiveness. Distrust of others due to negative past experiences. Hiding one’s emotions under guise of rational criticism.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Cups",
   "order": "King",
   "description": "Emotional maturity, optimism, ability to overcome past injuries and look ahead. Openness to new things, but with prudence and caution. Closing one’s ear to voices from the past.",
   "inverse description": "Difficulty in overcoming an emotional blow. A pessimistic outlook caused by negative past experiences. ",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "Ace",
   "description": "Creative momentum. Active sexuality. Strong impulses, energy and drive. Life force. Beginning of growth. Dispersing one’s efforts in different directions.",
   "inverse description": "Lack of energy, restriction, repressed sexuality, a creative block.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "2",
   "description": "Crossroads. Several options or ways to choose from. Every course offers benefits. A brief encounter with someone going his own way. Blocking an opponent’s line of advance.",
   "inverse description": "Crossroads. Several options or ways to choose from. Every course offers benefits. A brief encounter with someone going his own way. Blocking an opponent’s line of advance.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "3",
   "description": "Direction. Moving forward after a moment of hesitation. Finding a middle path between two courses of action. Gaining an advantage by keeping neutrality between two conflicting sides.",
   "inverse description": "Direction. Moving forward after a moment of hesitation. Finding a middle path between two courses of action. Gaining an advantage by keeping neutrality between two conflicting sides.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "4",
   "description": "Stalemate. A temporary stop in order to prepare for future advancement. Tensions at present, but good prospects in the long run. Making a move now is in nobody’s interest.",
   "inverse description": "Stalemate. A temporary stop in order to prepare for future advancement. Tensions at present, but good prospects in the long run. Making a move now is in nobody’s interest.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "5",
   "description": "Overcoming. Getting over a weak opposition. Breakdown of an equilibrium. Focusing on the main objective. An initiative to make a winning move.",
   "inverse description": "With the covering part of the central wand below – walking into a complex situation, losing one’s edge.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "6",
   "description": "Collaboration. A strong alliance between two parties with different goals but common present interests. A taste for luxury made possible by favorable conditions.",
   "inverse description": "With the decorated flower at the bottom – excessive pursuit of luxury. Need to break up an alliance of opponents.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "7",
   "description": "Struggle. Someone putting up a fight against many opponents. Obstinacy, endurance, keeping one’s position in a conflict situation. A difficult combat with an uncertain outcome.",
   "inverse description": "Struggle. Someone putting up a fight against many opponents. Obstinacy, endurance, keeping one’s position in a conflict situation. A difficult combat with an uncertain outcome.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "8",
   "description": "Regulation. It is possible to advance only by following the rules. Occupation with short-term goals while losing the long-term perspective. A roadblock.",
   "inverse description": "Regulation. It is possible to advance only by following the rules. Occupation with short-term goals while losing the long-term perspective. A roadblock.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "9",
   "description": "Interruption. Difficulties and oppositions too hard to overcome. Giving up one’s projects to avoid conflict. Starting anew after a challenging period.",
   "inverse description": "Interruption. Difficulties and oppositions too hard to overcome. Giving up one’s projects to avoid conflict. Starting anew after a challenging period.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "10",
   "description": "Loyalty. A partnership or an alliance endures hardships and succeeds in getting over them. Pure intentions and perseverance lead to success. Honoring one’s principles in spite of difficulties.",
   "inverse description": "Loyalty. A partnership or an alliance endures hardships and succeeds in getting over them. Pure intentions and perseverance lead to success. Honoring one’s principles in spite of difficulties.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "Page",
   "description": "A creative potential which still needs processing. Keeping a safe distance from events and waiting for the right moment.",
   "inverse description": "A task too heavy for the querent’s strength. Difficulty in controlling desires and urges. Immature approach to sexuality.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "Knight",
   "description": "A change of direction, following one’s urges and passions. A temporary stop, but there is still energy and a desire to advance.",
   "inverse description": "Preoccupation with the satisfaction of one’s own desires. Problem in defining long-term goals. Submitting to temptation.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "Queen",
   "description": "A feminine figure with a strong personality. Things connected with food and eating. Speaking softly while holding a big stick. A secure, well-defended position.",
   "inverse description": "Intimidation, menace. Using sexuality as a means of control. Problems with a strong mother figure. Fear of feminine power.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Wands",
   "order": "King",
   "description": "A mature attitude to urges and desires. Controlled creativity. Prodding oneself to make a move forward. Investing present assets in future projects.",
   "inverse description": "Plans to move forward are frustrated by self-defeating acts. Hesitation, conflicts, tendency to make things too heavy and complex.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "Ace",
   "description": "A planned initiative. Rational and logical thinking, sharpness of mind. A conclusive decision. Readiness to fight. Ambition, competitiveness. A victory with stable achievements.",
   "inverse description": "Negative and unproductive thoughts. Misconceptions, delusions. Self-defeat. Injury.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "2",
   "description": "Boundaries. Limits that protect and define something which is in development. Making full use of the present situation. Preparations for future advancement. A clear view encompassing the overall situation.",
   "inverse description": "Boundaries. Limits that protect and define something which is in development. Making full use of the present situation. Preparations for future advancement. A clear view encompassing the overall situation.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "3",
   "description": "Victory. Overcoming a weak opposition. Cutting through a quandary and going forward in a clear direction. A third party intervenes and wins over two weakened opponents.",
   "inverse description": "A failure, defeat from a weaker opponent. An unsuccessful attempt to make a decisive move.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "4",
   "description": "Restriction. A limited space for development and maneuver. Trying to push against constraints. Potentials to grow once the present limitations become less solid.",
   "inverse description": "Confinement and blocking, lack of motivation or energy to break out of a limited situation.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "5",
   "description": "Breakthrough. A forward thrust overcoming the existing limits. Keeping up spirits in a tight situation. Doing things in one’s own way.",
   "inverse description": "A failed initiative to change the situation. Stubbornness leading nowhere. Oppressing factors cannot be removed now.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "6",
   "description": "Adaptation. Accepting limitations and adapting oneself to them. Respecting the present order. Compromising in order to make the best of the existing situation.",
   "inverse description": "Resignation, surrender, giving up the ambition to change things for the better. Lack of fighting spirit.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "7",
   "description": "Sharpness. A focused and determined attitude. Concentrating on a clear goal and doing what it takes to reach it. Winning a fight with the odds evenly balanced.",
   "inverse description": "A narrow and over-concentrated vision. Investing one’s efforts and resources in a lost cause.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "8",
   "description": "Defenses. Putting up shields and blocks. Psychological defense mechanisms. A need to be in total control. A well-guarded treasure. Entering another’s domain with permission.",
   "inverse description": "Defenses. Putting up shields and blocks. Psychological defense mechanisms. A need to be in total control. A well-guarded treasure. Entering another’s domain with permission.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "9",
   "description": "Courage. Winning a fight against a superior force. Pure intentions. Putting imperfect means to good use.",
   "inverse description": "Losing against a stronger opponent. Sloppiness, imperfect preparations for a challenge.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "10",
   "description": "Exhaustion. A complex situation with many conflicting interests. A long battle without a clear outcome. Need to find an ally who will attack the problem from a different direction.",
   "inverse description": "Immobility. Impossible to move now. Feeling attacked from different sides. A painful and humiliating defeat.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "Page",
   "description": "Preparation for a future challenge. Looking for a compromise between reason and strong desires. Hesitating to use one’s power.",
   "inverse description": "Confusion, negative and inhibiting thoughts, self-defeat. Sloppy use of one’s own tools may cause damage.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "Knight",
   "description": "Energy and resources to advance, still looking for the right direction. Hovering above practical constraints. Determination and perseverance.",
   "inverse description": "Trying to force one’s misguided views, insisting on a wrong direction. Losing touch with the ground.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "Queen",
   "description": "A secure and protected position. Defending one’s territory. Preparation of something that shouldn’t be exposed yet.",
   "inverse description": "Defensiveness and rigidity. Suspicion and fixed ideas block advancement and preclude new connections.",
   "keyword": ""
 },
 {
   "frenchName": "",
   "englishName": "",
   "suit": "Swords",
   "order": "King",
   "description": "A determination to break from the past, a strong will. Feeling equipped to deal with uncertainty. Wisdom and intellectual maturity.",
   "inverse description": "A divided heart, a need to cut off from something to which one is still attached. Over-calculating in a vain attempt to overcome uncertainty. ",
   "keyword": ""
 }
]
;

function drawCards(quantity){
    var selection = [];
    for (i = 0; i < quantity; i++){
        selection.push(CARDS[Math.floor((Math.random() * 78) + 1)]);
    }
    return selection;
}

var stack = drawCards(5);
var spread = [];
var dealOut = stack.forEach(function(x) {
    spread.push(x.order);
});



$(".cards").append("<P>" + spread + "</p>");
