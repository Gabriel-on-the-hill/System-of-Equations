const QUESTIONS_DATA = {
    "guided": [
        {
            "id": "b86123af",
            "question": "Hiro and Sofia purchased shirts and pants from a store. The price of each shirt purchased was the same and the price of each pair of pants purchased was the same. Hiro purchased 4 shirts and 2 pairs of pants for $86, and Sofia purchased 3 shirts and 5 pairs of pants for $166. Which of the following systems of linear equations represents the situation, if $x$ represents the price, in dollars, of each shirt and $y$ represents the price, in dollars, of each pair of pants?",
            "options": [
                "$\\begin{cases} 4x + 2y = 86 \\\\ 3x + 5y = 166 \\end{cases}$",
                "$\\begin{cases} 3x + 2y = 86 \\\\ 4x + 5y = 166 \\end{cases}$",
                "$\\begin{cases} 4x + 2y = 166 \\\\ 3x + 5y = 86 \\end{cases}$",
                "$\\begin{cases} 5x + 3y = 86 \\\\ 2x + 4y = 166 \\end{cases}$"
            ],
            "correctIndex": 0,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> When solving system word problems, first translate the words into equations. Hiro: $4x + 2y = 86$. Sofia: $3x + 5y = 166$. This directly matches Choice A. (If the question asked for the price, you would immediately type these two equations into Desmos to find the intersection).<br><br><strong>🪤 Trap Alert:</strong> Choices B and C switch the variables or the totals. Always double-check which variable ($x$ or $y$) is matched with which quantity."
        },
        {
            "id": "608eeb6e",
            "question": "The solution to the given system of equations is $(x, y)$. What is the value of $x$?<br>$$\\begin{cases} x + 2y = 10 \\\\ x - 2y = 2 \\end{cases}$$",
            "options": ["2", "4", "6", "8"],
            "correctIndex": 2,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> For any system with pure numbers and no unknown constants, graph it immediately! Type both equations exactly as written into Desmos. Click their intersection point $(6, 2)$. The question asks for $x$, so the answer is $6$. This is 100% accurate and takes seconds.<br><br><strong>Algebraic Method (Elimination):</strong> Since you have $+2y$ and $-2y$, adding the equations cancels $y$: $2x = 12 \\Rightarrow x = 6$."
        },
        {
            "id": "cb8f449f",
            "question": "The system of equations above has solution $(x, y)$. What is the value of $x$?<br>$$\\begin{cases} x - \\frac{1}{2}y = 2 \\\\ \\frac{1}{2}y = 4 \\end{cases}$$",
            "options": ["3", "4", "5", "6"],
            "correctIndex": 3,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Type both equations exactly as written into Desmos. Look at the $x$-coordinate of the intersection point, which is $6$. No algebra required!<br><br><strong>Algebraic Method (Substitution):</strong> The second equation tells you exactly what $\\frac{1}{2}y$ is ($4$). Substitute that value directly into the first equation: $x - (4) = 2 \\Rightarrow x = 6$."
        },
        {
            "id": "71189542",
            "question": "A group of 202 people went on an overnight camping trip, taking 60 tents with them. Some of the tents held 2 people each, and the rest held 4 people each. Assuming all the tents were filled to capacity and every person got to sleep in a tent, exactly how many of the tents were 2-person tents?",
            "options": ["18", "19", "20", "30"],
            "correctIndex": 1,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Translate to equations: let $x$ be 2-person tents and $y$ be 4-person tents. Total tents: $x + y = 60$. Total people: $2x + 4y = 202$. Type both equations into Desmos. Click their intersection point $(19, 41)$. The question asks for 2-person tents ($x$), so the answer is $19$.<br><br><strong>⚡ Logic Shortcut:</strong> If all 60 tents were 4-person, they'd hold 240 people. We have only 202. The 'missing' 38 spots mean some tents only hold 2 (a difference of 2). $38 / 2 = 19$ tents."
        },
        {
            "id": "8abed0fb",
            "question": "What is the solution $(x, y)$ to the given system of equations?<br>$$\\begin{cases} y = 3x - 1 \\\\ x = 1 \\end{cases}$$",
            "options": ["$(1, 2)$", "$(1, 4)$", "$(2, 5)$", "$(2, 1)$"],
            "correctIndex": 0,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> Graph both $y = 3x - 1$ and $x = 1$ in Desmos. Tap the intersection point $(1, 2)$.<br><br><strong>Algebraic Method:</strong> Substitute $x = 1$ into the first equation: $y = 3(1) - 1 = 2$.<br><br><strong>🪤 Trap Alert:</strong> Make sure you put the $x$ and $y$ in the correct order in the ordered pair $(x, y)$."
        },
        {
            "id": "19fdf387",
            "question": "In the $xy$-plane, the graph of $y = x - 6$ intersects the graph of $y = -x + 12$ at the point $(a, b)$. What is the value of $a$?",
            "options": ["3", "6", "9", "12"],
            "correctIndex": 2,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Type both equations $y = x - 6$ and $y = -x + 12$ into Desmos. Click the intersection point $(9, 3)$. The question asks for the $x$-coordinate ($a$), so the answer is $9$.<br><br><strong>Algebraic Method:</strong> Set the equations equal to each other:<br>$x - 6 = -x + 12$<br>$2x = 18 \\Rightarrow x = 9$."
        },
        {
            "id": "ee031767",
            "question": "A dance teacher ordered outfits for students. Outfits for boys cost $26, and outfits for girls cost $35. The teacher ordered a total of 28 outfits and spent $881. If $b$ represents the number of outfits for boys and $g$ represents the number of outfits for girls, which system of equations represents this situation?",
            "options": [
                "$\\begin{cases} b + g = 881 \\\\ 26b + 35g = 28 \\end{cases}$",
                "$\\begin{cases} b + g = 28 \\\\ 26b + 35g = 881 \\end{cases}$",
                "$\\begin{cases} b + g = 28 \\\\ 35b + 26g = 881 \\end{cases}$",
                "$\\begin{cases} 26b + 35g = 28 \\\\ b + g = 881 \\end{cases}$"
            ],
            "correctIndex": 1,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> Create the equations using 'Quantity' and 'Value' groupings. Quantity: $b + g = 28$. Value: $26b + 35g = 881$. Choice B matches this setup perfectly. To actually solve it, you would simply type them into Desmos!"
        },
        {
            "id": "4b76c7f1",
            "question": "In the given system of equations, $a$ is a constant. If the system has infinitely many solutions, what is the value of $a$?<br>$$\\begin{cases} 9x + 2y = 12 \\\\ 36x + 8y = a \\end{cases}$$",
            "options": ["4", "12", "36", "48"],
            "correctIndex": 3,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Type both equations into Desmos and add a slider for $a$. Drag the slider until the two lines perfectly overlap (become one line). This happens when $a = 48$.<br><br><strong>Algebraic Method:</strong> 'Infinitely many solutions' means the equations are identical (multiples of each other). Look at the $x$ coefficients: $36 / 9 = 4$. To be the same line, the constant $a$ must also be $4$ times the first constant: $a = 12 \\times 4 = 48$."
        }
    ],
    "independent": [
        {
            "id": "cd33b015",
            "question": "If $(x, y)$ is the solution to the given system of equations, what is the value of $y$?<br>$$\\begin{cases} x = 20 \\\\ x + 3y = 65 \\end{cases}$$",
            "options": ["10", "15", "60", "65"],
            "correctIndex": 1,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> Type both equations $x = 20$ and $x + 3y = 65$ into Desmos. Tap the intersection point $(20, 15)$. The question asks for $y$, so the answer is $15$.<br><br><strong>Algebraic Method:</strong> Simple substitution. Plug $x=20$ into the second equation: $20 + 3y = 65 \\Rightarrow 3y = 45 \\Rightarrow y = 15$."
        },
        {
            "id": "4fb8adf7",
            "question": "What is the solution $(x, y)$ to the given system of equations?<br>$$\\begin{cases} y = 2x \\\\ 2x + y = 12 \\end{cases}$$",
            "options": ["$(3, 6)$", "$(6, 12)$", "$(2, 4)$", "$(4, 8)$"],
            "correctIndex": 0,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> Graph both $y = 2x$ and $2x + y = 12$ in Desmos. Click the intersection point to instantly reveal the solution $(3, 6)$.<br><br><strong>Algebraic Method:</strong> Substitute $y=2x$ into the second equation: $2x + (2x) = 12 \\Rightarrow 4x = 12 \\Rightarrow x = 3$. Then $y = 2(3) = 6$. The solution is $(3, 6)$."
        },
        {
            "id": "0dd6227f",
            "question": "At how many points do the graphs of the equations $y = 2x + 1$ and $y = 3x - 5$ intersect in the $xy$-plane?",
            "options": ["0", "1", "2", "Infinitely many"],
            "correctIndex": 1,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Graph $y = 2x + 1$ and $y = 3x - 5$. Notice their lines cross exactly once. It is a visual certainty.<br><br><strong>Algebraic Method:</strong> Compare the slopes. The first line has slope $2$. The second has slope $3$. Since the slopes are different, the lines MUST intersect at exactly one point."
        },
        {
            "id": "7efe5495",
            "question": "The solution to the given system of equations is $(x, y)$. What is the value of $x + y$?<br>$$\\begin{cases} y = x + 3 \\\\ 2x + y = 9 \\end{cases}$$",
            "options": ["2", "5", "7", "9"],
            "correctIndex": 2,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Graph both equations $y = x + 3$ and $2x + y = 9$. Click the intersection point to reveal $(2, 5)$. The question asks for the sum $x + y$, which is $2 + 5 = 7$.<br><br><strong>Algebraic Method (Substitution):</strong> Substitute $y$:<br>$2x + (x+3) = 9 \\Rightarrow 3x = 6 \\Rightarrow x = 2$.<br>Then find $y$: $y = 2 + 3 = 5$. Sum is $7$."
        },
        {
            "id": "ed92fb68",
            "question": "If the system of equations below has solution $(x, y)$, what is the value of $x + y$?<br>$$\\begin{cases} 4x + 5y = 80 \\\\ 5x + 4y = 82 \\end{cases}$$",
            "options": ["9", "18", "36", "162"],
            "correctIndex": 1,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Type both equations exactly as written into Desmos. Tap the intersection point to reveal $(9, 9)$. The question asks for the sum $x + y$, which is $9 + 9 = 18$.<br><br><strong>Algebraic Shortcut:</strong> Don't solve for $x$ or $y$ individually. Add the two equations together:<br>$(4x + 5y) + (5x + 4y) = 80 + 82 \\Rightarrow 9x + 9y = 162$.<br>Divide the entire equation by $9$: $x + y = 18$."
        },
        {
            "id": "2704399f",
            "question": "Which of the following systems of equations has the same solution as a system where lines intersect at $(0, -2)$?",
            "options": [
                "$\\begin{cases} x = 0 \\\\ y = -2 \\end{cases}$",
                "$\\begin{cases} y = x \\\\ y = -2 \\end{cases}$",
                "$\\begin{cases} x = -2 \\\\ y = 0 \\end{cases}$",
                "$\\begin{cases} x + y = 0 \\\\ x - y = 2 \\end{cases}$"
            ],
            "correctIndex": 0,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> The point $(0, -2)$ simply means $x=0$ and $y=-2$. If you type the equations from Choice A into Desmos, they form horizontal and vertical lines intersecting exactly at $(0, -2)$."
        }
    ],
    "homework": [
        {
            "id": "0df106df",
            "question": "An online bookstore sells novels for $4 and magazines for $1. Sadie purchased 11 total items and spent exactly $20. How many novels did she purchase?",
            "options": ["2", "3", "4", "5"],
            "correctIndex": 1,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> Form the equations: let $n$ = novels, $m$ = magazines. Total items: $n + m = 11$. Total cost: $4n + 1m = 20$. Type both into Desmos (use $x$ and $y$). Tap the intersection point $(3, 8)$. The question asks for novels ($x$), so $n = 3$.<br><br><strong>Algebraic Method:</strong> Subtract eq1 from eq2: $3n = 9 \\Rightarrow n = 3$."
        },
        {
            "id": "7d89376f",
            "question": "An airline sells $x$ tickets for $90 each and $y$ tickets for $250 each. If they sold 120 tickets and collected $27,600, which system represents this?",
            "options": [
                "$\\begin{cases} x + y = 120 \\\\ 90x + 250y = 27600 \\end{cases}$",
                "$\\begin{cases} x + y = 27600 \\\\ 90x + 250y = 120 \\end{cases}$",
                "$\\begin{cases} 90x + 250y = 120 \\\\ x + y = 27600 \\end{cases}$",
                "$\\begin{cases} x = 90y \\\\ x + y = 120 \\end{cases}$"
            ],
            "correctIndex": 0,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> Setup a Quantity/Value system. Quantity: $x + y = 120$. Value: $90x + 250y = 27600$. This matches Choice A.<br><br><strong>⚡ Speed Tip:</strong> Once you determine the 'quantity' equation ($x + y = 120$), you can immediately eliminate Choices B and C without even looking at the value equation."
        },
        {
            "id": "17f176ec",
            "question": "A theater sells full-price tickets for $11 and reduced-price tickets for $8.25. They sold 214 total tickets for $2,145. Which system determines the number of full-price tickets ($f$) and reduced ($r$)?",
            "options": [
                "$\\begin{cases} f + r = 2145 \\\\ 11f + 8.25r = 214 \\end{cases}$",
                "$\\begin{cases} f + r = 214 \\\\ 11f + 8.25r = 2145 \\end{cases}$",
                "$\\begin{cases} f + r = 214 \\\\ 8.25f + 11r = 2145 \\end{cases}$",
                "$\\begin{cases} 11f + 8.25r = 214 \\\\ f + r = 2145 \\end{cases}$"
            ],
            "correctIndex": 1,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> Group the totals correctly with their respective equations to form the system. Quantity: Full ($f$) + Reduced ($r$) = $214$ total tickets. Value: $11f + 8.25r = 2145$ dollars. This matches Choice B.<br><br><strong>🪤 Trap Alert:</strong> Choice A swaps the totals ($2145$ for quantity, $214$ for money). Always align money with money, and items with items."
        },
        {
            "id": "44d65912",
            "question": "Angela scores points by collecting coins ($c$) and stars ($s$).<br>Game 1: 20 coins, 10 stars = 700 points.<br>Game 2: 25 coins, 12 stars = 850 points.<br>Which system models this?",
            "options": [
                "$\\begin{cases} 10c + 20s = 700 \\\\ 12c + 25s = 850 \\end{cases}$",
                "$\\begin{cases} 20c + 10s = 700 \\\\ 25c + 12s = 850 \\end{cases}$",
                "$\\begin{cases} 20c + 25s = 700 \\\\ 10c + 12s = 850 \\end{cases}$",
                "$\\begin{cases} c + s = 30 \\\\ 20c + 10s = 700 \\end{cases}$"
            ],
            "correctIndex": 1,
            "difficulty": "Easy",
            "explanation": "<strong>SAT Strategy:</strong> Use the formula: $\\text{Score} = (\\text{Quantity} \\times \\text{Value})$.<br>Game 1: $20$ coins $\\times c$ + $10$ stars $\\times s = 700 \Rightarrow 20c + 10s = 700$<br>Game 2: $25$ coins $\\times c$ + $12$ stars $\\times s = 850 \Rightarrow 25c + 12s = 850$<br>This matches Choice B."
        },
        {
            "id": "bd45df49",
            "question": "If $x = 2y - 10$ and $3x + 4y = 30$, what is the value of $x$?",
            "options": ["2", "4", "6", "10"],
            "correctIndex": 0,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Type $x = 2y - 10$ and $3x + 4y = 30$ exactly as written into Desmos. Tap the intersection point $(2, 6)$. The question asks for $x$, so the answer is $2$.<br><br><strong>Algebraic Method (Substitution):</strong> Substitute $x = 2y - 10$ into the second equation: $3(2y - 10) + 4y = 30 \\Rightarrow 6y - 30 + 4y = 30 \\Rightarrow 10y = 60 \\Rightarrow y = 6$. Substitute $y=6$ back: $x = 2(6) - 10 = 2$."
        },
        {
            "id": "6e50ce28",
            "question": "The sum of a number $x$ and 5 is twice as large as $y$. The number $x$ is 3 less than $y$. Which system models this?",
            "options": [
                "$\\begin{cases} x + 5 = 2y \\\\ x = y - 3 \\end{cases}$",
                "$\\begin{cases} x + 5 = 2y \\\\ y = x - 3 \\end{cases}$",
                "$\\begin{cases} 2(x + 5) = y \\\\ x = y - 3 \\end{cases}$",
                "$\\begin{cases} x + y = 3 \\\\ x + 5 = 2y \\end{cases}$"
            ],
            "correctIndex": 0,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Translate the English into algebra verbatim to model the system. 'The sum of $x$ and 5 ($x+5$) is twice as large as $y$ ($2y$)': $x + 5 = 2y$. 'The number $x$ is 3 less than $y$': $x = y - 3$. Choice A perfectly models both statements.<br><br><strong>🪤 Trap Alert:</strong> '3 less than $y$' translates to $y - 3$, NOT $3 - y$. Order matters in subtraction!"
        },
        {
            "id": "2875ba81",
            "question": "Solve the system: $\\begin{cases} 3x + y = 13 \\\\ x - 2y = 2 \\end{cases}$. What is the value of $y$?",
            "options": ["1", "3", "4", "7"],
            "correctIndex": 0,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> This is a standard system with no unknown constants. Graph $3x + y = 13$ and $x - 2y = 2$. Tap the intersection point $(4, 1)$. The question asks for $y$, so the answer is $1$.<br><br><strong>Algebraic Method:</strong> Multiply the second equation by $3$: $3x - 6y = 6$. Subtract from the first equation: $7y = 7 \\Rightarrow y = 1$."
        },
        {
            "id": "dcc4886a",
            "question": "A system has infinitely many solutions. If one equation is $y = 3x - 5$ and the second is $y = ax + b$, what is the value of $b$?",
            "options": ["3", "0", "-1", "-5"],
            "correctIndex": 3,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Type $y=3x-5$ in Desmos. Add $y=ax+b$ with sliders for $a$ and $b$. 'Infinitely many solutions' means the lines must perfectly overlap. Shift the sliders until they overlap exactly, which happens when $a=3$ and $b=-5$.<br><br><strong>Algebraic Shortcut:</strong> 'Infinitely many' means identical equations. Since one is $y = 3x - 5$ and the other is $y = ax + b$, $a$ MUST be $3$ and $b$ MUST be $-5$."
        },
        {
            "id": "e77a76ce",
            "question": "Which of the following systems has NO solution?",
            "options": [
                "$\\begin{cases} y = 2x + 1 \\\\ y = 2x - 5 \\end{cases}$",
                "$\\begin{cases} y = 2x \\\\ y = 0 \\end{cases}$",
                "$\\begin{cases} y = 2x + 1 \\\\ y = 3x + 1 \\end{cases}$",
                "$\\begin{cases} x = 0 \\\\ y = 0 \\end{cases}$"
            ],
            "correctIndex": 0,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Graph all four choices exactly as written. Look for the system that forms two perfectly parallel lines that never cross. That visually occurs in Choice A.<br><br><strong>Algebraic Shortcut:</strong> NO solution means parallel lines (same slope, different $y$-intercepts). Choice A has identical slopes of 2 but different intercepts (1 and -5)."
        },
        {
            "id": "5e422ff9",
            "question": "Solve for $y$: $\\begin{cases} 2x + 3y = 12 \\\\ 3x - 2y = 5 \\end{cases}$",
            "options": ["2", "3", "4", "6"],
            "correctIndex": 0,
            "difficulty": "Medium",
            "explanation": "<strong>Desmos Strategy:</strong> Do not waste time doing substitution or elimination on messy fractions! Type $2x + 3y = 12$ and $3x - 2y = 5$ into Desmos. The intersection is $(3, 2)$. The $y$-value is $2$.<br><br><strong>Algebraic Method:</strong> Use elimination. Multiply top by $3$, bottom by $2$:<br>$6x + 9y = 36$<br>$6x - 4y = 10$<br>Subtract: $13y = 26 \\Rightarrow y = 2$."
        }
    ],
    "exam": [
        {
            "id": "ff501705",
            "question": "In the system of equations below, $a$ is a constant. If the system has no solution, what is the value of $a$?<br>$$\\begin{cases} \\frac{1}{2}x - \\frac{1}{4}y = 5 \\\\ ax - 3y = 20 \\end{cases}$$",
            "options": ["4", "6", "12", "18"],
            "correctIndex": 1,
            "difficulty": "Hard",
            "explanation": "<strong>Desmos Strategy:</strong> Type the first equation exactly. Add the second equation with a slider for $a$. Adjust $a$ until the lines are perfectly parallel (never intersect). Visually, this happens when $a=6$.<br><br><strong>Algebraic Method:</strong> No solution means the slopes are equal. Eq 1 slope: $\\frac{1}{4}y = \\frac{1}{2}x - 5 \\Rightarrow y = 2x - 20$ (Slope = $2$). Eq 2 slope: $3y = ax - 20 \\Rightarrow y = \\frac{a}{3}x - \\frac{20}{3}$ (Slope = $\\frac{a}{3}$). Set slopes equal: $\\frac{a}{3} = 2 \\Rightarrow a = 6$."
        },
        {
            "id": "b0fc3166",
            "question": "The graph of a system of linear equations is shown.<br><br><img src=\"assets/easy_p2_i0.png\" alt=\"System of equations graph\" class=\"question-img\"><br><br>What is the solution $(x, y)$ to the system?",
            "options": ["$(-3, 0)$", "$(0, 3)$", "$(3, 0)$", "$(0, -3)$"],
            "correctIndex": 2,
            "difficulty": "Easy",
            "explanation": "<strong>Desmos Strategy:</strong> For graphical questions, immediately look for the intersection point of the two lines. <br><br>Starting at the origin $(0,0)$, move $3$ units to the right along the $x$-axis. The intersection point lies exactly there, so the $y$-coordinate is $0$. The solution is $(3, 0)$.<br><br><strong>🪤 Trap Alert:</strong> Choice B switches the coordinates to $(0, 3)$. Always make sure your first number is the horizontal ($x$) movement."
        },
        {
            "id": "e1248a5c",
            "question": "In the system below, $a$ and $c$ are constants. If the system has infinitely many solutions, what is the value of $a$?<br>$$\\begin{cases} 4x + y = 7 \\\\ ax + 3y = c \\end{cases}$$",
            "options": ["4", "7", "12", "21"],
            "correctIndex": 2,
            "difficulty": "Hard",
            "explanation": "<strong>Desmos Strategy:</strong> Type $4x + y = 7$. Add $ax + 3y = c$ and create sliders for $a$ and $c$. 'Infinitely many solutions' means the lines must overlap perfectly. Adjust the sliders until they form one line. This occurs at $a=12$ and $c=21$.<br><br><strong>Algebraic Method:</strong> Multiply the first equation by 3 to match the $y$ coefficients: $12x + 3y = 21$. For the second equation to be identical, $a = 12$ and $c = 21$."
        },
        {
            "id": "52cb8ea4",
            "question": "If $(x, y)$ is the solution to the system below, what is the value of $5x - 5y$?<br>$$\\begin{cases} 9x - 4y = 25 \\\\ 4x + y = 30 \\end{cases}$$",
            "options": ["5", "25", "50", "55"],
            "correctIndex": 1,
            "difficulty": "Hard",
            "explanation": "<strong>Desmos Strategy:</strong> Don't try to be a hero with algebra. Graph $9x - 4y = 25$ and $4x + y = 30$ in Desmos. Click their intersection point to reveal $(5.8, 6.8)$. The question asks for $5x - 5y$. Use a calculator: $5(5.8) - 5(6.8) = -5$. This is foolproof.<br><br><strong>Algebraic Shortcut:</strong> Look for a clean combination. Subtract the second equation from the first: $(9x - 4y) - (4x + y) = 25 - 30 \\Rightarrow 5x - 5y = -5$."
        },
        {
            "id": "f718c9cf",
            "question": "If $x > 0$ and $y > 0$ such that $2x + 3y = 13$ and $x - y = 4$, what is the value of $x + y$?",
            "options": ["5", "6", "7", "9"],
            "correctIndex": 1,
            "difficulty": "Hard",
            "explanation": "<strong>Desmos Strategy:</strong> Graph $2x + 3y = 13$ and $x - y = 4$. Tap the intersection point $(5, 1)$. The question asks for the sum $x + y$, which is $5 + 1 = 6$.<br><br><strong>Algebraic Method:</strong> Since $x - y = 4$, we know $x = y + 4$. Substitute this into the first equation: $2(y+4) + 3y = 13 \\Rightarrow 5y + 8 = 13 \\Rightarrow 5y = 5 \\Rightarrow y = 1$. Then $x = 1 + 4 = 5$. Sum is $6$."
        },
        {
            "id": "e2e3942f",
            "question": "In the system below, $a$ is a constant. If the system has no solution, what is the value of $a$?<br>$$\\begin{cases} y = 2x + 4 \\\\ y = ax - 1 \\end{cases}$$",
            "options": ["-2", "0", "1", "2"],
            "correctIndex": 3,
            "difficulty": "Hard",
            "explanation": "<strong>Desmos Strategy:</strong> Type $y = 2x + 4$. Add $y = ax - 1$ with a slider for $a$. Adjust $a$ until the lines are perfectly parallel. This visually happens exactly at $a=2$.<br><br><strong>Algebraic Shortcut:</strong> No solution means parallel lines (same slope, different intercept). The slope of the first line is 2. Therefore, $a = 2$."
        },
        {
            "id": "e1259a5a",
            "question": "A system of two linear equations is graphed in the $xy$-plane below.<br><br><img src=\"assets/easy_p7_i0.png\" alt=\"System of equations graph\" class=\"question-img\"><br><br>Which of the following points is the solution to the system of equations?",
            "options": ["$(-5, 3)$", "$(3, -5)$", "$(0, -2)$", "$(-2, 0)$"],
            "correctIndex": 0,
            "difficulty": "Hard",
            "explanation": "<strong>Desmos Strategy:</strong> For graphical questions like this, you don't even need to type equations into Desmos. Look directly at the provided graph. The solution to a graphed system is the single point where the two lines intersect. <br><br>Find the intersection point: start at the origin $(0,0)$, move $5$ units left on the $x$-axis to $-5$, and $3$ units up on the $y$-axis to $3$. The point is $(-5, 3)$.<br><br><strong>🪤 Trap Alert:</strong> Choice B switches the $x$ and $y$ coordinates. Always trace to the $x$-axis first."
        },
        {
            "id": "fb5e7f59",
            "question": "The graphs of $y = 3x^2 - x$ and $y = 2x + k$ intersect at exactly one point in the $xy$-plane. If $k$ is a constant, what is the value of $k$?",
            "options": ["$-\\frac{3}{4}$", "$-\\frac{1}{2}$", "$0$", "$\\frac{3}{4}$"],
            "correctIndex": 0,
            "difficulty": "Hard",
            "explanation": "<strong>Desmos Strategy:</strong> Graph the parabola $y = 3x^2 - x$. Graph the line $y = 2x + k$ and add a slider for $k$. Adjust $k$ until the line is perfectly tangent to the parabola (touches at exactly one point). This visually happens at $k = -0.75$ (or $-3/4$).<br><br><strong>Algebraic Method:</strong> Set the equations equal: $3x^2 - x = 2x + k \\Rightarrow 3x^2 - 3x - k = 0$. 'Exactly one point' means the discriminant ($b^2 - 4ac$) is zero. $(-3)^2 - 4(3)(-k) = 0 \\Rightarrow 9 + 12k = 0 \\Rightarrow k = -\\frac{3}{4}$."
        }
    ],
    "guided_hard": [
        { "id": "hard_g1", "linkId": "ff501705" },
        { "id": "hard_g2", "linkId": "b0fc3166" },
        { "id": "hard_g3", "linkId": "e1248a5c" },
        { "id": "hard_g4", "linkId": "52cb8ea4" },
        { "id": "hard_g5", "linkId": "f718c9cf" },
        { "id": "hard_g6", "linkId": "e2e3942f" },
        { "id": "hard_g7", "linkId": "e1259a5a" },
        { "id": "hard_g8", "linkId": "fb5e7f59" }
    ],
    "independent_hard": [
        { "id": "hard_i1", "linkId": "ff501705" },
        { "id": "hard_i2", "linkId": "b0fc3166" },
        { "id": "hard_i3", "linkId": "e1248a5c" },
        { "id": "hard_i4", "linkId": "52cb8ea4" },
        { "id": "hard_i5", "linkId": "f718c9cf" },
        { "id": "hard_i6", "linkId": "e2e3942f" }
    ],
    "homework_hard": [
        { "id": "hard_h1", "linkId": "ff501705" },
        { "id": "hard_h2", "linkId": "b0fc3166" },
        { "id": "hard_h3", "linkId": "e1248a5c" },
        { "id": "hard_h4", "linkId": "52cb8ea4" },
        { "id": "hard_h5", "linkId": "f718c9cf" },
        { "id": "hard_h6", "linkId": "e2e3942f" },
        { "id": "hard_h7", "linkId": "e1259a5a" },
        { "id": "hard_h8", "linkId": "fb5e7f59" }
    ],
    "exam_hard": [
        { "id": "hard_e1", "linkId": "ff501705" },
        { "id": "hard_e2", "linkId": "b0fc3166" },
        { "id": "hard_e3", "linkId": "e1248a5c" },
        { "id": "hard_e4", "linkId": "52cb8ea4" },
        { "id": "hard_e5", "linkId": "f718c9cf" },
        { "id": "hard_e6", "linkId": "e2e3942f" },
        { "id": "hard_e7", "linkId": "1e11190a" },
        { "id": "hard_e8", "linkId": "fb5e7f59" }
    ]
};
window.QUESTIONS = QUESTIONS_DATA;
