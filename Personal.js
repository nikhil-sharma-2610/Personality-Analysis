function ch()
{var a=0;
 var b=0;
 var c=0;
 var d=0;
 var e=0;
 var f=0;
 var g=0;
 var h=0;
 var i=0;
 if(document.check.Question1.value=="B G")
 {
     b++;
     g++;
 }
 else if(document.check.Question1.value=="A C")
 {
     c++;
     a++;
 }
 else if(document.check.Question1.value=="E F")
 {
     e++;
     f++;
 }
 else if(document.check.Question1.value=="D H")
 {
     d++;
     h++;
 }
 else
 {
     i++;
 }
 if(document.check.Question2.value=="E B")
 {
     e++;
     b++;
 }
 else if(document.check.Question2.value=="C F")
 {
     c++;
     f++;
 }
 else if(document.check.Question2.value=="G H")
 {
     g++;
     h++;
 }
 else if(document.check.Question2.value=="D A")
 {
     a++;
     d++;
 }
 else
 {
     i++;
 }
 if(document.check.Question3.value=="H")
 {
     h++;
 }
 else if(document.check.Question3.value=="B E F")
 {
     b++;
     e++;
     f++;
 }
 else if(document.check.Question3.value=="C D")
 {
     c++;
     d++;
 }
 else if(document.check.Question3.value=="A G")
 {
     a++;
     g++;
 }
 else
 {
     i++;
 }
 if(document.check.Question4.value=="F C")
 {
     f++;
     c++;
 }
 else if(document.check.Question4.value=="G D")
 {
     g++;
     d++;
 }
 else if(document.check.Question4.value=="E A")
 {
     c++;
 }
 else if(document.check.Question4.value=="H B")
 {
     h++;
     b++;
 }
 else
 {
     i++;
 }
 if(document.check.Question5.value=="B F")
 {
     b++;
     f++;
 }
 else if(document.check.Question5.value=="D C")
 {
     c++;
     d++;
 }
 else if(document.check.Question5.value=="H G")
 {
     h++;
     g++;
 }
 else if(document.check.Question5.value=="E A")
 {
     a++;
     e++;
 }
 else
 {
     i++;
 }
 if(document.check.Question6.value=="A F")
 {
     a++;
     f++;
 }
 else if(document.check.Question6.value=="C G")
 {
     c++;
     g++;
 }
 else if(document.check.Question6.value=="B D")
 {
     b++;
     d++;
 }
 else if(document.check.Question6.value=="H E")
 {
     h++;
     e++;
 }
 else
 {
     i++;
 }
 if(document.check.Question7.value=="A F")
 {
     a++;
     f++;
 }
 else if(document.check.Question7.value=="D B")
 {
     b++;
     d++;
 }
 else if(document.check.Question7.value=="C G")
 {
     c++;
     g++;
 }
 else if(document.check.Question7.value=="H E")
 {
     h++;
     e++;
 }
 else
 {
     i++;
 }
 if(document.check.Question8.value=="E B")
 {
     e++;
     b++;
 }
 else if(document.check.Question8.value=="F C")
 {
     f++;
     c++;
 }
 else if(document.check.Question8.value=="A G")
 {
     a++;
     g++;
 }
 else if(document.check.Question8.value=="D H")
 {
     d++;
     h++;
 }
 else
 {
     i++;
 }
 if(document.check.Question9.value=="H G")
 {
     h++;
     g++;
 }
 else if(document.check.Question9.value=="A F")
 {
     a++;
     f++;
 }
 else if(document.check.Question9.value=="B E")
 {
     b++;
     e++;
 }
 else if(document.check.Question9.value=="C D")
 {
     d++;
     c++;
 }
 else
 {
     i++;
 }
 if(document.check.Question10.value=="G E")
 {
     g++;
     e++;
 }
 else if(document.check.Question10.value=="B H")
 {
     b++;
     h++;
 }
 else if(document.check.Question10.value=="A C")
 {
     c++;
     a++;
 }
 else if(document.check.Question10.value=="F D")
 {
     d++;
     f++;
 }
 else
 {
     i++;
 }
 if(document.check.Question11.value=="G B")
 {
     b++;
     g++;
 }
 else if(document.check.Question11.value=="E A H")
 {
     e++;
     a++;
     h++;
 }
 else if(document.check.Question11.value=="F C")
 {
     c++;
     f++;
 }
 else if(document.check.Question11.value=="D")
 {
     d++;
 }
 else
 {
     i++;
 }
 if(document.check.Question11.value=="F B")
 {
     b++;
     f++;
 }
 else if(document.check.Question11.value=="A H E")
 {
     e++;
     a++;
     h++;
 }
 else if(document.check.Question11.value=="G H")
 {
     g++;
     h++;
 }
 else if(document.check.Question11.value=="D C")
 {
     d++;
     c++;
 }
 else
 {
     i++;
 }
 if(i==0)
 {
    x1="PLEASE REFILL THE FORM!";
    x2=".";
    x3=".";
    y1="He is lazy";
    y2=".";
    y3=".";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    p="A";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(a==6)
 {
    x1="Gregarious, Funny and Energetic";
    x2="Very Influential and Persuasive";
    x3="Action Oriented, Observant and Big picture thinkers";
    y1="Too competitive";
    y2="Dramatic at times";
    y3="Too impulsive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Affectionate and Warm hearted with a wide social circle";
    x5="Empathetic and Encouraging";
    x6="Compelling";
    y4="Overly sensitive and approval seeking";
    y5="They tend to be too hard on themselves and neglect their their own needs";
    y6="Manipulative sometimes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="A";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(b==6)
 {
    x1="Kind, loyal and very outgoing";
    x2="Conscientious and enjoy helping others";
    x3="Organized and dependable";
    y1="They can sometimes be quite approval seeking";
    y2="Dislike changes and can be very sensitive to criticism";
    y3="If they have very strong beliefs , they can be a bit intolerant and controlling";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Sensitive and mindful of others' feelings";
    x5="Take practical decisions with an eye for detail";
    x6="Quite good at following routines and rules";
    y4="Avoid confrontations and tend to neglect their own needs";
    y5="Dislike abstract concepts a bit too much";
    y6="People might take advantages for different purposes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="B";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(c==6)
 {
    x1="Enjoy people and socializing";
    x2="Practical yet very optimistic";
    x3="Focused on the present and are very spontaneous";
    y1="Attention seekers";
    y2="Dislike abstract theories a bit too harshly";
    y3="Tend to be impulsive and do not plan ahead";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Empathetic,caring and naturally warm and enthusiastic";
    x5="Strongest people skills among all MBTI types";
    x6="Highly creative and are one of the most fun and spontaneous types";
    y4="Needs a lot of approval from others and can be overly emotional";
    y5="Overthink a lot and tend to get stressed out easily";
    y6="Very disorganised and struggle to follow rules";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="C";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(d==6)
 {
    x1="Great conversationalists and enjoy debating";
    x2="Curious and value knowledge which makes them quite innovative";
    x3="Living in the moment";
    y1="Too argumentative";
    y2="Strongly dislike routines and do not like to be controlled";
    y3="More likely to slip up in long term relationships and projects for not being big picture thinkers";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Self-confident and traditional";
    x5="Provide refreshing environment";
    x6="Daring";
    y4="In-flexible in their ways";
    y5="Bossy";
    y6="Sometimes makes wrong statements at wrong times";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="D";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(g==6)
 {
    x1="Action-oriented risk takers who enjoy new things";
    x2="Love to gain experience";
    x3="Self-confident with problem solving";
    y1="Grow bored very easily";
    y2="Struggle with commitment";
    y3="Tend to come off as self-absorbed and reserved";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Creative and ambitious";
    x5="Tend to accept other people as they are and avoid conflicts";
    x6="Highly loyal to their values and beliefs";
    y4="Quite unaware of their environment";
    y5="Very strong need for personal space";
    y6="Tend to avoid arguments and confrontations, which makes them appear a bit submissive";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="G";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(h==6)
 {
    x1="Tend to be flexible and good at thinking outside of the box";
    x2="Highly logical and objective abstract thinkers";
    x3="Tend to be very independent and don't mind being alone";
    y1="Tend to procrastinate a lot and may appear lazy";
    y2="Highly prone to self doubt";
    y3="Too reserved and may come off as cold and insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Observant and detail-oriented";
    x5="Satified by simple life";
    x6="Useless";
    y4="Very judgemental";
    y5="Too subjective";
    y6="Can sometimes be overly critical of others";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="H";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(f==6)
 {
    x1="Assertive, outspoken and have strong communication skills";
    x2="Well organized and are good at making decisions";
    x3="Very self assured and make good leaders";
    y1="Too impatient and agressive at times";
    y2="Stubborn by nature and may be intolerant";
    y3="Might not be intentionally cruel but can often be very insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="";
    x5="";
    x6="";
    y4="";
    y5="";
    y6="";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="F";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(e==6)
 {
    x1="Sensitive to the needs of others and value close, deep relationships";
    x2="Highly creative and artistic";
    x3="Tend to be idealistic and have very strong belief systems";
    y1="Care less about oneself";
    y2="Over sensitive";
    y3="They tend to have way too utopian beliefs";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Good at seeing the big picture";
    x5="Loyal and Caring";
    x6="Good Leadership qualities";
    y4="Sometimes lose sight of the little things and overlook details";
    y5="Can be overly idealistic and tend to take everything personally";
    y6="Can be very difficult to get to know";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="E";
    document.getElementById("Traitx").innerHTML= p;
 }
 
 else if(a==5)
 {
    x1="Gregarious, Funny and Energetic";
    x2="Very Influential and Persuasive";
    x3="Action Oriented, Observant and Big picture thinkers";
    y1="Too competitive";
    y2="Dramatic at times";
    y3="Too impulsive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Affectionate and Warm hearted with a wide social circle";
    x5="Empathetic and Encouraging";
    x6="Compelling";
    y4="Overly sensitive and approval seeking";
    y5="They tend to be too hard on themselves and neglect their their own needs";
    y6="Manipulative sometimes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="A";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(b==5)
 {
    x1="Kind, loyal and very outgoing";
    x2="Conscientious and enjoy helping others";
    x3="Organized and dependable";
    y1="They can sometimes be quite approval seeking";
    y2="Dislike changes and can be very sensitive to criticism";
    y3="If they have very strong beliefs , they can be a bit intolerant and controlling";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Sensitive and mindful of others' feelings";
    x5="Take practical decisions with an eye for detail";
    x6="Quite good at following routines and rules";
    y4="Avoid confrontations and tend to neglect their own needs";
    y5="Dislike abstract concepts a bit too much";
    y6="People might take advantages for different purposes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="B";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(c==5)
 {
    x1="Enjoy people and socializing";
    x2="Practical yet very optimistic";
    x3="Focused on the present and are very spontaneous";
    y1="Attention seekers";
    y2="Dislike abstract theories a bit too harshly";
    y3="Tend to be impulsive and do not plan ahead";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Empathetic,caring and naturally warm and enthusiastic";
    x5="Strongest people skills among all MBTI types";
    x6="Highly creative and are one of the most fun and spontaneous types";
    y4="Needs a lot of approval from others and can be overly emotional";
    y5="Overthink a lot and tend to get stressed out easily";
    y6="Very disorganised and struggle to follow rules";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="C";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(d==5)
 {
    x1="Great conversationalists and enjoy debating";
    x2="Curious and value knowledge which makes them quite innovative";
    x3="Living in the moment";
    y1="Too argumentative";
    y2="Strongly dislike routines and do not like to be controlled";
    y3="More likely to slip up in long term relationships and projects for not being big picture thinkers";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Self-confident and traditional";
    x5="Provide refreshing environment";
    x6="Daring";
    y4="In-flexible in their ways";
    y5="Bossy";
    y6="Sometimes makes wrong statements at wrong times";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="D";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(g==5)
 {
    x1="Action-oriented risk takers who enjoy new things";
    x2="Love to gain experience";
    x3="Self-confident with problem solving";
    y1="Grow bored very easily";
    y2="Struggle with commitment";
    y3="Tend to come off as self-absorbed and reserved";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Creative and ambitious";
    x5="Tend to accept other people as they are and avoid conflicts";
    x6="Highly loyal to their values and beliefs";
    y4="Quite unaware of their environment";
    y5="Very strong need for personal space";
    y6="Tend to avoid arguments and confrontations, which makes them appear a bit submissive";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="G";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(h==5)
 {
    x1="Tend to be flexible and good at thinking outside of the box";
    x2="Highly logical and objective abstract thinkers";
    x3="Tend to be very independent and don't mind being alone";
    y1="Tend to procrastinate a lot and may appear lazy";
    y2="Highly prone to self doubt";
    y3="Too reserved and may come off as cold and insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Observant and detail-oriented";
    x5="Satified by simple life";
    x6="Useless";
    y4="Very judgemental";
    y5="Too subjective";
    y6="Can sometimes be overly critical of others";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="H";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(f==5)
 {
    x1="Assertive, outspoken and have strong communication skills";
    x2="Well organized and are good at making decisions";
    x3="Very self assured and make good leaders";
    y1="Too impatient and agressive at times";
    y2="Stubborn by nature and may be intolerant";
    y3="Might not be intentionally cruel but can often be very insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="";
    x5="";
    x6="";
    y4="";
    y5="";
    y6="";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="F";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(e==5)
 {
    x1="Sensitive to the needs of others and value close, deep relationships";
    x2="Highly creative and artistic";
    x3="Tend to be idealistic and have very strong belief systems";
    y1="Care less about oneself";
    y2="Over sensitive";
    y3="They tend to have way too utopian beliefs";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Good at seeing the big picture";
    x5="Loyal and Caring";
    x6="Good Leadership qualities";
    y4="Sometimes lose sight of the little things and overlook details";
    y5="Can be overly idealistic and tend to take everything personally";
    y6="Can be very difficult to get to know";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="E";
    document.getElementById("Traitx").innerHTML= p;
 }

 else if(a==4)
 {
    x1="Gregarious, Funny and Energetic";
    x2="Very Influential and Persuasive";
    x3="Action Oriented, Observant and Big picture thinkers";
    y1="Too competitive";
    y2="Dramatic at times";
    y3="Too impulsive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Affectionate and Warm hearted with a wide social circle";
    x5="Empathetic and Encouraging";
    x6="Compelling";
    y4="Overly sensitive and approval seeking";
    y5="They tend to be too hard on themselves and neglect their their own needs";
    y6="Manipulative sometimes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="A";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(b==4)
 {
    x1="Kind, loyal and very outgoing";
    x2="Conscientious and enjoy helping others";
    x3="Organized and dependable";
    y1="They can sometimes be quite approval seeking";
    y2="Dislike changes and can be very sensitive to criticism";
    y3="If they have very strong beliefs , they can be a bit intolerant and controlling";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Sensitive and mindful of others' feelings";
    x5="Take practical decisions with an eye for detail";
    x6="Quite good at following routines and rules";
    y4="Avoid confrontations and tend to neglect their own needs";
    y5="Dislike abstract concepts a bit too much";
    y6="People might take advantages for different purposes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="B";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(c==4)
 {
    x1="Enjoy people and socializing";
    x2="Practical yet very optimistic";
    x3="Focused on the present and are very spontaneous";
    y1="Attention seekers";
    y2="Dislike abstract theories a bit too harshly";
    y3="Tend to be impulsive and do not plan ahead";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Empathetic,caring and naturally warm and enthusiastic";
    x5="Strongest people skills among all MBTI types";
    x6="Highly creative and are one of the most fun and spontaneous types";
    y4="Needs a lot of approval from others and can be overly emotional";
    y5="Overthink a lot and tend to get stressed out easily";
    y6="Very disorganised and struggle to follow rules";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="C";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(d==4)
 {
    x1="Great conversationalists and enjoy debating";
    x2="Curious and value knowledge which makes them quite innovative";
    x3="Living in the moment";
    y1="Too argumentative";
    y2="Strongly dislike routines and do not like to be controlled";
    y3="More likely to slip up in long term relationships and projects for not being big picture thinkers";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Self-confident and traditional";
    x5="Provide refreshing environment";
    x6="Daring";
    y4="In-flexible in their ways";
    y5="Bossy";
    y6="Sometimes makes wrong statements at wrong times";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="D";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(g==4)
 {
    x1="Action-oriented risk takers who enjoy new things";
    x2="Love to gain experience";
    x3="Self-confident with problem solving";
    y1="Grow bored very easily";
    y2="Struggle with commitment";
    y3="Tend to come off as self-absorbed and reserved";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Creative and ambitious";
    x5="Tend to accept other people as they are and avoid conflicts";
    x6="Highly loyal to their values and beliefs";
    y4="Quite unaware of their environment";
    y5="Very strong need for personal space";
    y6="Tend to avoid arguments and confrontations, which makes them appear a bit submissive";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="G";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(h==4)
 {
    x1="Tend to be flexible and good at thinking outside of the box";
    x2="Highly logical and objective abstract thinkers";
    x3="Tend to be very independent and don't mind being alone";
    y1="Tend to procrastinate a lot and may appear lazy";
    y2="Highly prone to self doubt";
    y3="Too reserved and may come off as cold and insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Observant and detail-oriented";
    x5="Satified by simple life";
    x6="Useless";
    y4="Very judgemental";
    y5="Too subjective";
    y6="Can sometimes be overly critical of others";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="H";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(f==4)
 {
    x1="Assertive, outspoken and have strong communication skills";
    x2="Well organized and are good at making decisions";
    x3="Very self assured and make good leaders";
    y1="Too impatient and agressive at times";
    y2="Stubborn by nature and may be intolerant";
    y3="Might not be intentionally cruel but can often be very insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="";
    x5="";
    x6="";
    y4="";
    y5="";
    y6="";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="F";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(e==4)
 {
    x1="Sensitive to the needs of others and value close, deep relationships";
    x2="Highly creative and artistic";
    x3="Tend to be idealistic and have very strong belief systems";
    y1="Care less about oneself";
    y2="Over sensitive";
    y3="They tend to have way too utopian beliefs";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Good at seeing the big picture";
    x5="Loyal and Caring";
    x6="Good Leadership qualities";
    y4="Sometimes lose sight of the little things and overlook details";
    y5="Can be overly idealistic and tend to take everything personally";
    y6="Can be very difficult to get to know";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="E";
    document.getElementById("Traitx").innerHTML= p;
 }

 else if(a==3)
 {
    x1="Gregarious, Funny and Energetic";
    x2="Very Influential and Persuasive";
    x3="Action Oriented, Observant and Big picture thinkers";
    y1="Too competitive";
    y2="Dramatic at times";
    y3="Too impulsive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Affectionate and Warm hearted with a wide social circle";
    x5="Empathetic and Encouraging";
    x6="Compelling";
    y4="Overly sensitive and approval seeking";
    y5="They tend to be too hard on themselves and neglect their their own needs";
    y6="Manipulative sometimes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="A";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(b==3)
 {
    x1="Kind, loyal and very outgoing";
    x2="Conscientious and enjoy helping others";
    x3="Organized and dependable";
    y1="They can sometimes be quite approval seeking";
    y2="Dislike changes and can be very sensitive to criticism";
    y3="If they have very strong beliefs , they can be a bit intolerant and controlling";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Sensitive and mindful of others' feelings";
    x5="Take practical decisions with an eye for detail";
    x6="Quite good at following routines and rules";
    y4="Avoid confrontations and tend to neglect their own needs";
    y5="Dislike abstract concepts a bit too much";
    y6="People might take advantages for different purposes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="B";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(c==3)
 {
    x1="Enjoy people and socializing";
    x2="Practical yet very optimistic";
    x3="Focused on the present and are very spontaneous";
    y1="Attention seekers";
    y2="Dislike abstract theories a bit too harshly";
    y3="Tend to be impulsive and do not plan ahead";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Empathetic,caring and naturally warm and enthusiastic";
    x5="Strongest people skills among all MBTI types";
    x6="Highly creative and are one of the most fun and spontaneous types";
    y4="Needs a lot of approval from others and can be overly emotional";
    y5="Overthink a lot and tend to get stressed out easily";
    y6="Very disorganised and struggle to follow rules";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="C";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(d==3)
 {
    x1="Great conversationalists and enjoy debating";
    x2="Curious and value knowledge which makes them quite innovative";
    x3="Living in the moment";
    y1="Too argumentative";
    y2="Strongly dislike routines and do not like to be controlled";
    y3="More likely to slip up in long term relationships and projects for not being big picture thinkers";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Self-confident and traditional";
    x5="Provide refreshing environment";
    x6="Daring";
    y4="In-flexible in their ways";
    y5="Bossy";
    y6="Sometimes makes wrong statements at wrong times";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="D";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(g==3)
 {
    x1="Action-oriented risk takers who enjoy new things";
    x2="Love to gain experience";
    x3="Self-confident with problem solving";
    y1="Grow bored very easily";
    y2="Struggle with commitment";
    y3="Tend to come off as self-absorbed and reserved";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Creative and ambitious";
    x5="Tend to accept other people as they are and avoid conflicts";
    x6="Highly loyal to their values and beliefs";
    y4="Quite unaware of their environment";
    y5="Very strong need for personal space";
    y6="Tend to avoid arguments and confrontations, which makes them appear a bit submissive";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="G";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(h==3)
 {
    x1="Tend to be flexible and good at thinking outside of the box";
    x2="Highly logical and objective abstract thinkers";
    x3="Tend to be very independent and don't mind being alone";
    y1="Tend to procrastinate a lot and may appear lazy";
    y2="Highly prone to self doubt";
    y3="Too reserved and may come off as cold and insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Observant and detail-oriented";
    x5="Satified by simple life";
    x6="Useless";
    y4="Very judgemental";
    y5="Too subjective";
    y6="Can sometimes be overly critical of others";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="H";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(f==3)
 {
    x1="Assertive, outspoken and have strong communication skills";
    x2="Well organized and are good at making decisions";
    x3="Very self assured and make good leaders";
    y1="Too impatient and agressive at times";
    y2="Stubborn by nature and may be intolerant";
    y3="Might not be intentionally cruel but can often be very insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="";
    x5="";
    x6="";
    y4="";
    y5="";
    y6="";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="F";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(e==3)
 {
    x1="Sensitive to the needs of others and value close, deep relationships";
    x2="Highly creative and artistic";
    x3="Tend to be idealistic and have very strong belief systems";
    y1="Care less about oneself";
    y2="Over sensitive";
    y3="They tend to have way too utopian beliefs";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Good at seeing the big picture";
    x5="Loyal and Caring";
    x6="Good Leadership qualities";
    y4="Sometimes lose sight of the little things and overlook details";
    y5="Can be overly idealistic and tend to take everything personally";
    y6="Can be very difficult to get to know";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="E";
    document.getElementById("Traitx").innerHTML= p;
 }

 else if(a==2)
 {
    x1="Gregarious, Funny and Energetic";
    x2="Very Influential and Persuasive";
    x3="Action Oriented, Observant and Big picture thinkers";
    y1="Too competitive";
    y2="Dramatic at times";
    y3="Too impulsive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Affectionate and Warm hearted with a wide social circle";
    x5="Empathetic and Encouraging";
    x6="Compelling";
    y4="Overly sensitive and approval seeking";
    y5="They tend to be too hard on themselves and neglect their their own needs";
    y6="Manipulative sometimes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="A";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(b==2)
 {
    x1="Kind, loyal and very outgoing";
    x2="Conscientious and enjoy helping others";
    x3="Organized and dependable";
    y1="They can sometimes be quite approval seeking";
    y2="Dislike changes and can be very sensitive to criticism";
    y3="If they have very strong beliefs , they can be a bit intolerant and controlling";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Sensitive and mindful of others' feelings";
    x5="Take practical decisions with an eye for detail";
    x6="Quite good at following routines and rules";
    y4="Avoid confrontations and tend to neglect their own needs";
    y5="Dislike abstract concepts a bit too much";
    y6="People might take advantages for different purposes";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="B";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(c==2)
 {
    x1="Enjoy people and socializing";
    x2="Practical yet very optimistic";
    x3="Focused on the present and are very spontaneous";
    y1="Attention seekers";
    y2="Dislike abstract theories a bit too harshly";
    y3="Tend to be impulsive and do not plan ahead";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Empathetic,caring and naturally warm and enthusiastic";
    x5="Strongest people skills among all MBTI types";
    x6="Highly creative and are one of the most fun and spontaneous types";
    y4="Needs a lot of approval from others and can be overly emotional";
    y5="Overthink a lot and tend to get stressed out easily";
    y6="Very disorganised and struggle to follow rules";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="C";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(d==2)
 {
    x1="Great conversationalists and enjoy debating";
    x2="Curious and value knowledge which makes them quite innovative";
    x3="Living in the moment";
    y1="Too argumentative";
    y2="Strongly dislike routines and do not like to be controlled";
    y3="More likely to slip up in long term relationships and projects for not being big picture thinkers";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Self-confident and traditional";
    x5="Provide refreshing environment";
    x6="Daring";
    y4="In-flexible in their ways";
    y5="Bossy";
    y6="Sometimes makes wrong statements at wrong times";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="D";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(g==2)
 {
    x1="Action-oriented risk takers who enjoy new things";
    x2="Love to gain experience";
    x3="Self-confident with problem solving";
    y1="Grow bored very easily";
    y2="Struggle with commitment";
    y3="Tend to come off as self-absorbed and reserved";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Creative and ambitious";
    x5="Tend to accept other people as they are and avoid conflicts";
    x6="Highly loyal to their values and beliefs";
    y4="Quite unaware of their environment";
    y5="Very strong need for personal space";
    y6="Tend to avoid arguments and confrontations, which makes them appear a bit submissive";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="G";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(h==2)
 {
    x1="Tend to be flexible and good at thinking outside of the box";
    x2="Highly logical and objective abstract thinkers";
    x3="Tend to be very independent and don't mind being alone";
    y1="Tend to procrastinate a lot and may appear lazy";
    y2="Highly prone to self doubt";
    y3="Too reserved and may come off as cold and insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Observant and detail-oriented";
    x5="Satified by simple life";
    x6="Useless";
    y4="Very judgemental";
    y5="Too subjective";
    y6="Can sometimes be overly critical of others";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="H";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(f==2)
 {
    x1="Assertive, outspoken and have strong communication skills";
    x2="Well organized and are good at making decisions";
    x3="Very self assured and make good leaders";
    y1="Too impatient and agressive at times";
    y2="Stubborn by nature and may be intolerant";
    y3="Might not be intentionally cruel but can often be very insensitive";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="";
    x5="";
    x6="";
    y4="";
    y5="";
    y6="";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="F";
    document.getElementById("Traitx").innerHTML= p;
 }
 else if(e==2)
 {
    x1="Sensitive to the needs of others and value close, deep relationships";
    x2="Highly creative and artistic";
    x3="Tend to be idealistic and have very strong belief systems";
    y1="Care less about oneself";
    y2="Over sensitive";
    y3="They tend to have way too utopian beliefs";
    document.getElementById("Traitx").innerHTML= x1;
    document.getElementById("Traitx").innerHTML= y1;
    document.getElementById("Traitx").innerHTML= x2;
    document.getElementById("Traitx").innerHTML= y2;
    document.getElementById("Traitx").innerHTML= x3;
    document.getElementById("Traitx").innerHTML= y3;
    x4="Good at seeing the big picture";
    x5="Loyal and Caring";
    x6="Good Leadership qualities";
    y4="Sometimes lose sight of the little things and overlook details";
    y5="Can be overly idealistic and tend to take everything personally";
    y6="Can be very difficult to get to know";
    document.getElementById("Traitx").innerHTML= x4;
    document.getElementById("Traitx").innerHTML= y5;
    document.getElementById("Traitx").innerHTML= x6;
    document.getElementById("Traitx").innerHTML= y4;
    document.getElementById("Traitx").innerHTML= x5;
    document.getElementById("Traitx").innerHTML= y6;
    p="E";
    document.getElementById("Traitx").innerHTML= p;
 }
 
 localStorage.setItem("result1",x1);
 localStorage.setItem("result2",x2);
 localStorage.setItem("result3",x3);
 localStorage.setItem("res1",y1);
 localStorage.setItem("res2",y2);
 localStorage.setItem("res3",y3);
 localStorage.setItem("result4",x4);
 localStorage.setItem("result5",x5);
 localStorage.setItem("result6",x6);
 localStorage.setItem("res4",y4);
 localStorage.setItem("res5",y5);
 localStorage.setItem("res6",y6);
 localStorage.setItem("N",p);
 window.location.href="Trait1.html";
}