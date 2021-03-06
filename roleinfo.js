//colors
var towncolor="#19FF19";
var mafiacolor="red";
var randcolor="#42C0FB";
var neutcolor='lightgrey';
var hilitecolor="orange";
//Generic goals
var towngoal = "Lynch every criminal and evildoer.";
var mafiagoal = "Kill anyone that will not submit to the Mafia.";

var roles=[
			{      
					rolename:"sheriff",
					alignment:"town investigative",
					abilities:'Check one person each night for suspicious activity.',
					attributes:['You will know if your target is a member of the Mafia, except for the Godfather.',
					'You will know if your target is a Serial Killer.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"investigator",
					alignment:"town investigative",
					abilities:'Investigate one person each night for a clue to their role.',
					attributes:[],
					goal:towngoal,
					color:towncolor
			},
			/*ROLEIDEASCIENTIST
			{      
					rolename:"scientist",
					alignment:"town investigative",
					abilities:'Take a fingerprint sample of one person each night.',
					attributes:['Compare their sample to the test subject from the previous night, comparing alignment supertype (Town, Mafia, Neutral).',
					'You will recieve a result of \'Same\' or \'Different\'',
					'You may not sample yourself.',
					'You may not sample a revealed mayor.'],
					goal:towngoal,
					color:towncolor
			},*/
			{      
					rolename:"lookout",
					alignment:"town investigative",
					abilities:'Watch one person at night to see who visits them.',
					attributes:[],
					goal:towngoal,
					color:towncolor
			},
//ROLEIDEASHADOW (FOR CTRL + F PURPOSES)
			/*{      
					rolename:"shadowalker",
					alignment:"neutral killing",
					abilities:'Choose to walk in someone\'s shadow each night',
					attributes:["When walking in someone's shadow, You will kill whoever they visited.",
											"Lookouts will only see your target visiting someone and not you.",
											"If your target stays home or is a non visiting role, they will be attacked directly.",
											"Lookout will only see you if you do a direct attack on your target.",
											"If you target a Bodyguard, they will not be able to guard your attacks."],
					goal:"Kill anyone that would oppose you.",
					color:'#BF40BF'
			},*/
			{      
					rolename:"spy",
					alignment:"town investigative",
					abilities:'See who the Mafia visit at night.',
					attributes:['You can hear private messages.',
	'You will know who the Mafia visit at night.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"mayor",
					alignment:"town power",
					abilities:'You may reveal yourself as the Mayor of the Town.',
					attributes:['Once you have revealed yourself as Mayor your vote counts as 3 votes.',
					'You may not be healed once you have revealed yourself.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"escort",
					alignment:"town support",
					abilities:'Distract someone each night.',
					attributes:['Distraction blocks your target from using their role\'s night ability.',
					'You are immune to role blocks.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"medium",
					alignment:"town support",
					abilities:'When dead speak to a living person at night.',
					attributes:     ['You will speak to the dead anonymously each night you are alive.',
					'You may only speak to a living person once.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"retributionist",
					alignment:"town power",
					abilities:'You may revive a dead Town member.',
					attributes:['You may only resurrect one person.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"transporter",
					alignment:"town support",
					abilities:'Choose two people to transport at night.',
					attributes:['Transporting two people swaps all targets against them.',
					'You may transport yourself.',
					'Your targets will NOT know they were transported.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"doctor",
					alignment:"town protective",
					abilities:'Heal one person each night, preventing them from dying.',
					attributes:['You may only heal yourself once.',
					'You will know if your target is attacked.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"bodyguard",
					alignment:"town protective",
					abilities:'Protect one person from death at night.',
					attributes:['If your target is attacked both you and your attacker will die instead.',
					'If you successfully protect someone you can still be healed.',
					'Your counterattack ignores night immunity.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"vigilante",
					alignment:"town killing",
					abilities:'Choose to take justice into your own hands and shoot someone.',
					attributes:['If you shoot another Town member you will commit suicide over the guilt.',
					'You can only shoot your gun 3 times.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"veteran",
					alignment:"town killing",
					abilities:'Decide if you will go on alert.',
					attributes:['While on alert you can not be killed at night.',
					'If anyone visits you while you are on alert they will be shot.',
					'You can only go on alert 3 times.',
					'You are immune to role blocks.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"jailor",
					alignment:"town power",
					abilities:'You may choose one person during the day to jail for the night.',
					attributes:['You may anonymously talk with your prisoner.',
'You can choose to execute your prisoner.',
'The jailed target can\'t perform their night ability.',
'While jailed the prisoner is safe from all attacks.'],
					goal:towngoal,
					color:towncolor
			},
			{      
					rolename:"godfather",
					alignment:"mafia killing",
					abilities:'Kill someone each night.',
					attributes:['You can\'t be killed at night.',
//'If there is a Mafioso he will attack the target instead of you.',
'You can choose to command your Caporegime member to kill for you instead.',
'You will appear to be a Town member to the Sheriff.',
'If there is more than 12 people in-game, you cannot be seen by a Lookout or Spy',
'You can talk with the other Mafia at night.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			{      
					rolename:"underboss",
					alignment:"mafia killing",
					abilities:'Kill someone each night.',
					attributes:['You can\'t be killed at night.',
'If you are role-blocked, your Caporegime member will automatically kill for you.',
'If you are jailed, your Caporegime member can choose to kill instead of their normal night action.',
'You can talk with the other Mafia at night.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			/*{    
					rolename:"mafioso",
					alignment:"mafia killing",
					abilities:'Carry out the Godfather\'s order.',
					attributes:['You can kill if the Godfather doesn\'t give you orders.',
'If the Godfather dies you will become the next Godfather.',
'You can talk with the other Mafia at night.'],
					goal:mafiagoal,
					color:mafiacolor
			},*/
			/*ROLEIDEANIGHTMARE
			{      
					rolename:"nightmarer",
					alignment:"mafia support",
					abilities:'Make someone have a nightmare about someone each night.',
					attributes:['Your target will be too scared to visit the person they have a nightmare about.',
								'Targets are told who the nightmare is about.',
								'Your target will be unable to visit the person until you give them a different nightmare.',								
								'All nightmares end if the nightmarer dies or is promoted.'
					],
					goal:mafiagoal,
					color:mafiacolor
			},*/
			{      
					rolename:"blackmailer",
					alignment:"mafia support",
					abilities:'Choose one person each night to blackmail.',
					attributes:['Blackmailed targets can not talk during the day.',
'If there are no kill capable Mafia roles left you will become a Mafioso.',
'You can talk with the other Mafia at night.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			{      
					rolename:"consigliere",
					alignment:"mafia support",
					abilities:'Check one person for their exact role each night.',
					attributes:['If there are no kill capable Mafia roles left you will become a Mafioso.',
'You can talk with the other Mafia at night.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			{      
					rolename:"consort",
					alignment:"mafia support",
					abilities:'Distract someone each night.',
					attributes:['Distraction blocks your target from using their role\'s night ability.',
'If there are no kill capable Mafia roles left you will become a Mafioso.',
'You can talk with the other Mafia at night.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			{      
					rolename:"disguiser",
					alignment:"mafia deception",
					abilities:'Choose a target to disguise yourself as.',
					attributes:['If your target dies you will appear to be them.',
'You can only use your night ability three times.',
'After disguising your name, position and character will be swapped with your targets.'],
					goal:mafiagoal,
					color:mafiacolor
			},
//ROLEIDEADRUG (FOR CTRL + F PURPOSES)
			/*{      
					rolename:"drug dealer",
					alignment:"mafia deception",
					abilities:'Choose to drug someone at night.',
					attributes:['Drugged targets will get a fake notification of your choice.',
					'You can choose between dousing, roleblocking, transporting, healing, guarding and witching.',
					'Alternatively, you can stop them from getting notifications for that night.'
//'If there are no kill capable Mafia roles left you will become a Mafioso.'
					],
					goal:mafiagoal,
					color:mafiacolor
			},*/
			//ROLEIDEAWATCHER
			/*{      
					rolename:"watcher",
					alignment:"mafia support",
					abilities:'Watch someone at night to see who visits them.',
					attributes:[''],
					goal:mafiagoal,
					color:mafiacolor
			},*/
			{      
					rolename:"framer",
					alignment:"mafia deception",
					abilities:'Choose someone to frame at night.',
					attributes:['If your target is investigated they will appear to be a member of the Mafia.',
'If there are no kill capable Mafia roles left you will become a Mafioso.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			{      
					rolename:"janitor",
					alignment:"mafia deception",
					abilities:'Choose a person to clean at night.',
					attributes:['If your target dies their role and last will won\'t be revealed to the Town.',
'Only you will see the cleaned targets role and last will.',
'You may only perform 3 cleanings.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			{      
					rolename:"forger",
					alignment:"mafia deception",
					abilities:'Choose a person and rewrite their last will at night',
					attributes:['If a target dies, their last will is replaced with your forgery.',
'You may only perform 3 forgeries.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			{      
					rolename:"serial killer",
					alignment:"neutral killing",
					abilities:'Kill someone each night.',
					attributes:['If you are role blocked you will attack the role blocker instead of your target.',
'You can not be killed at night.'],
					goal:"Kill everyone who would oppose you.",
					color:"blue"
			},
			{      
					rolename:"arsonist",
					alignment:"neutral killing",
					abilities:'Douse someone in gasoline or ignite all doused targets.',
					attributes:['Death from fire can\'t be prevented by healing or night immunities.',
'Select yourself to ignite doused people.'],
					goal:"Live to see everyone else burn.",
					color:"orange"
			},
			{      
					rolename:"werewolf",
					alignment:"neutral killing",
					abilities:'Transform into a Werewolf during the full moon.',
					attributes:['As a Werewolf you can not be killed at night.',
'As a Werewolf you will attack your victim and anyone that visits them.',
'Your attack goes through night immunity.'],
					goal:"Kill everyone who would oppose you.",
					color:"brown"
			},
/*ROLEIDEAELECTRIC (FOR CTRL + F PURPOSES)
			{
							rolename:"electrician",
							alignment:"neutral killing",
							abilities:'Charge someone each night.',
							attributes:["You cannot be killed at night.",
							"Your target will not be notified when they are charged.",
							"If a person that is charged visits another charged person, both people will die.",
							"If you charge a person for a second time, that person will die.",
							"If every other player is charged, the town will be notified.",
							"If every other player is charged, you may kill all charged players."
							],
							goal:"Live to see everyone electrocuted.",
							color:"#00FF80"
			},*/
			{      
					rolename:"jester",
					alignment:"neutral evil",
					abilities:'Trick the Town into voting against you.',
					attributes:['If you are lynched you may kill one of your guilty voters the following night.'],
					goal:"Get yourself lynched by any means necessary.",
					color:"pink"
			},
			{      
					rolename:"executioner",
					alignment:"neutral evil",
					abilities:'Trick the Town into lynching your target.',
					attributes:['Your target is <u>NAMEOFTARGET</u>.',
'If your target is killed at night you will become a jester.'],
					goal:"Get your target lynched at any cost.",
					color:"grey"
			},
			{      
					rolename:"witch",
					alignment:"neutral evil",
					abilities:'Control someone each night.',
					attributes:['You can only control targetable actions such as detection and killing.',
'You can force people to target themselves.',
'Your victim will know they are being controlled.'],
					goal:"Survive to see the Town lose the game.",
					color:"purple"
			},
			/*ROLEIDEANECRO
			{      
					rolename:"necromancer",
					alignment:"neutral evil",
					abilities:'Select one dead person to necromance back to life, allowing you to use their ability once.',
					attributes:['You cannot revive a Jailor.',
					'On odd nights you use the ability and on full moons you choose to necromance.',
					'You cannot use the same body twice.',
					'If you revive a role without a night ability, or a Retrib or Amne, you will gain night immunity instead.'				
					],
					goal:'Survive to see the town lose the game.',
					color:'black'
			},*/
			{      
					rolename:"survivor",
					alignment:"neutral benign",
					abilities:'Put on a bulletproof vest at night, protecting you from attacks.',
					attributes:['You can only use the bulletproof vest 4 times.'],
					goal:"Live to the end of the game.",
					color:"#DDDD00"
			},
			{      
					rolename:"amnesiac",
					alignment:"neutral benign",
					abilities:'Remember who you were by selecting a graveyard role.',
					attributes:['When you choose a role it will be revealed to the Town.',
					'You can\'t choose a unique role.'],
					goal:"Remember who you were and complete that roles objectives.",
					color:"cyan"
			},
			/*ROLEIDEAAVENGER
			{      
					rolename:"avenger",
					alignment:"neutral benign",
					abilities:'You will clean the first non-chaotic Neutral death OR the latest Town or Mafia death when half of them die and become their role.',
					attributes:['Your new alignment will be announced to the town.',
					'This ability also applies to lynches but you CANNOT become a lynched Jester.',
					'Only you will see the cleaned target\'s role and last will.'],
					goal:"Take vengeance for someone and complete their objective.",
					color:"#408080"
			},*/
			/*ROLEIDEABURGLAR*/
			{      
					rolename:"thief",
					alignment:"neutral evil",
					abilities:'Choose a person and steal their will at night.',
					attributes:['You may only steal 3 wills.',
					'Can only steal wills from Town roles.',
					'Evil targets will know someone tried to steal their will.',
					'If you steal someone\'s will the night they die, their will will not show.'],
					goal:"Manipulate the town into losing.",
					color:"#292929"
			},
			{      
					rolename:"burglar",
					alignment:"mafia support",
					abilities:'Choose a person and steal their will at night.',
					attributes:['You may only steal 3 wills.',
					'Can only steal wills from Town roles.',
					'Evil targets will know someone tried to steal their will.',
					'If you steal someone\'s will the night they die, their will will not show.'],
					goal:mafiagoal,
					color:mafiacolor
			},
			//Casual roles
			{
					rolename:"citizen",
					alignment:"town casual",
					abilities:'Your only ability is your vote.',
					attributes:['Without the burden of power to weigh you down, you exhibit superior logic and deductive abilities.'],
					goal:towngoal,
					color:towncolor
			},
			//ARPITR ROLES 
			/*{     
               rolename:"paradoxist",
               alignment:"Neutral Chaos",
               abilities:'Visit a player to send them backwards in time, roleblocking but also healing them. Visting a second time kills them.',
               attributes:['Your initial time is 8 o\'clock.','Visiting a Town member will send your clock forward 5 hours.','Visiting a member of the Mafia will send your clock forward 3 hours.','Visiting any Neutral role will send your clock backwards 2 hours.'],
               goal:"Land your clock on 12 o'clock to win",
               color:"magenta"
			},
			{
                     rolename:"orphan",
                     alignment:"neutral benign",
                     abilities:'Become the role of the person who attacked you first.',
                     attributes:["You are immune the first time you are attacked",
                     "You will become the role that attacked you.",
                     "If saved, you become the role of your savior.",
                     "When taken in, it will be announced that the Orphan was taken in."],
                     goal:"Get taken in, and help your team win.",
                     color:"turquoise"
         },
         {
                     rolename:"sniper",
                     alignment:"mafia killing",
                     abilities:'Shoot someone on a non-full moon nights.',
                     attributes:["Godfather or Mafioso can't attack when you shoot.",
                     "If both Mafioso and Godfather are in game, you become a Random mafia role.",
                     "You are immune to a Bodyguard, Veteran and Lookout.",
                     "You can charge your gun and pierce night immunity one night.",
                     "You make Dota happy."],
                     goal:mafiagoal,
                     color:mafiacolor
         }     */                     
];
var unique = ["jailor", "mayor", "retributionist", "veteran", "godfather", "mafioso", "werewolf"];
 
function getAttributes(num)
{
        var str="<br><div>";
        var arr=roles[num].attributes;
        for (var i=0;i<arr.length;i++)
        {
                str+="<span id='attribute'>-"+arr[i]+"</span><br>";    
        }
        return str+"</div>";
}
function format(str)
{
        var color;
        for (i = 0; i < roles.length; i++)
        {
                if (roles[i].rolename==str)
                {
                        color=roles[i].color;
                }
        }
        if (color==undefined)
        {
                color = "black";
        }
        var strings=str.split(" ");
        str="";
        for (x=0;x<strings.length;x++)
        {
                strings[x]=strings[x].substring(0,1).toUpperCase()+strings[x].substring(1,strings[x].length)+" ";              
                str+=strings[x];
        }      
        return "<h2 style='color:"+color+"'>"+str+"</h2>";
}
function shuffle(list)
{
        for (i=0;i<list.length;i++)
        {
                swap(list, i, randNum(list.length));   
        }      
}
function swap(list, x, y)
{
        var temp=list[x];
        list[x]=list[y];
        list[y]=temp;  
}
function lowerAll(arr)
{
        var lowered=[];
        for (i=0;i<arr.length;i++)
        {
                lowered[i]=arr[i].toLowerCase();
        }
        return lowered;
}
function capitalize(str)
{
        var strings=str.split(" ");
        str="";
        for (x=0;x<strings.length;x++)
        {
                strings[x]=strings[x].substring(0,1).toUpperCase()+strings[x].substring(1,strings[x].length)+" ";              
                str+=strings[x];
        }
       
        return str.trim();
}
function randNum(num)
{
        return (Math.floor( Math.random()*num ));
}
function getRoleNum(name)
{
        for (var i = 0; i < roles.length; i++)
        {
                if (roles[i].rolename==name)
                {
                        return i;
                }
        }
        return -1;
}
module.exports = {
          sortRoles: function(r)
          {
                        r=lowerAll(r);
                        for (i=0;i<r.length;i++)
                        {                                                      
                                var matches=roles.filter(function(elem)
                                {
                                        if (elem.alignment == r[i] || (r[i] == "any" && elem.alignment.split(" ") != 'casual')) //prevent casual rolling as any
                                        {
                                                return true;
                                        }
                                        else if (r[i].split(" ")[0]=="random")
                                        {                                                                      
                                                var splitr=r[i].split(" ");
                                                var splitelem=elem.alignment.split(" ");
                                                if (splitr[1] != undefined && splitelem[0] != undefined)
                                                {
                                                        if (splitr[1]==splitelem[0])
                                                        {
															if (splitelem[1] != 'power' && splitelem[1] != 'casual') //Prevent Town Power and Town Casual from rolling as random town.
															{
																return true;
															}
                                                        }
                                                }
                                        }
                                        return false;  
                                });    
                                if (matches.length>0)
                                {
                                        var rand;
                                        var rn;                                
                                        do
                                        {
                                                rand=randNum(matches.length);
                                                rn=matches[rand].rolename;     
                                        }
                                        while ( unique.indexOf(rn) != -1 && r.indexOf(rn) !=-1 );
                                        r[i]=rn;
                                }                              
                        }
                        for (i = 0; i < r.length; i++) //Format the roles correctly.
                        {
                                r[i]=capitalize(r[i]);
                        }                                    
                        return r;
          },
          hasRolecard: function(name)
          {              
                        return ( getRoleNum(name.toLowerCase())!=-1);
          },
          getRoleCard: function (name)
          {
                var output;
                name=name.toLowerCase();
                var num=getRoleNum(name);
                if (name!="")
                {
                        if (num==-1){
                                return ("Role '"+name+"' not found!");
                        }                                              
                        var al="<span class='aligntext' style='color:"+hilitecolor+"'><u>Alignment</u>: </span>"+module.exports.formatAlignment(roles[num].alignment);
                        var abi="<div class='abilities' style='color:"+hilitecolor+";'><b>Abilities: </b></div><br><span class='abilities'>-"+roles[num].abilities+"</span>";
                        var att="<div class='abilities' style='color:"+hilitecolor+";'><b>Attributes: </b></div>"+getAttributes(num);
                        var goal="<span class='goal'><div style='color:"+hilitecolor+"'><b>Goal</b>: </div>"+roles[num].goal+"</span>";
                        output="<div class='rolecard'>"+format(name)+al+"<br>"+
                        abi+"<br>"+
                        att+"<br>"+
                        goal+"</div>";
                        return output;                                                                                                 
                }      
                return "You need to specify a role!<br>";
        },
        formatAlignment: function (str)
        {                              
                if (module.exports.hasRolecard(str))
                {
                        var num=getRoleNum(str.toLowerCase());
                        var color;                     
                        str="<span style='color:"+roles[num].color+"'>"+capitalize(roles[num].rolename)+"</span>";
                }
                else
                {
                        str=str.replace(/[Tt]own/,"<span style='color:"+towncolor+"'>Town</span>");
                        str=str.replace(/[Ii]nvestigative/,"<span style='color:"+randcolor+"'>Investigative</span>");
                        str=str.replace(/[Ss]upport/,"<span style='color:"+randcolor+"'>Support</span>");
                        str=str.replace(/[Pp]rotective/,"<span style='color:"+randcolor+"'>Protective</span>");
                        str=str.replace(/[Pp]ower/,"<span style='color:"+randcolor+"'>Power</span>");
                        str=str.replace(/[Cc]asual/,"<span style='color:"+randcolor+"'>Casual</span>");
                        str=str.replace(/[Rr]andom/,"<span style='color:"+randcolor+"'>Random</span>");
                        str=str.replace(/[Kk]illing/,"<span style='color:"+randcolor+"'>Killing</span>");
                        str=str.replace(/[Mm]afia/,"<span style='color:"+mafiacolor+"'>Mafia</span>");
                        str=str.replace(/[Dd]eception/,"<span style='color:"+randcolor+"'>Deception</span>");
                        str=str.replace(/[Ee]vil/,"<span style='color:"+randcolor+"'>Evil</span>");
                        str=str.replace(/[Bb]enign/,"<span style='color:"+randcolor+"'>Benign</span>");
                        str=str.replace(/[Cc]haos/,"<span style='color:"+randcolor+"'>Chaos</span>");
                        str=str.replace(/[Nn]eutral/,"<span style='color:"+neutcolor+"'>Neutral</span>");      
                }
                return str;
        }      
};
