# Product Notes & Ideas

Add/edit this list as new ideas come up. Use it as a scratchpad for the product.

Many feature issues will start their lives as notes here. Feel free to copy text over from this file into new issues.

## List View

Create a `goal list` view that satisfies the following user stories:
- See a list of goals
  - Defaults to goals created by learners in current learner's chapter
- Click button to create new goal (go to `goal form`)
- View goal title
- View goal author avatar/handle
- View goal id/number
- View team size
- View goal category (e.g. `foundational`)
- View challenge estimation\*
- Search for goals by author
- Search for goals by category
- Search for goals by title
- Search for goals by id/number
- Search for goals by team size
- Filter goals by author
- Filter goals by challenge estimation
- Filter goals by team size
- Filter goals by category
- Filter goals by created date
- Sort goals by date created
  - Default: descending
- Sort goals by category
- Sort goals by team size
- Sort goals by challenge estimation
- Click on a goal to view full `goal detail` component

Within this list, make individual goal items expandable/collapsible. All goals start out in collapsed mode, but can be expanded to display the `goal detail` view/component.

\* challenge estimation = a computed value that helps learners determine the challenge level of a goal. uses players's challenge feedback for goal projects (filtered by players who have similar XP/Elo to the current learner)

## Goal Detail View

- Goals show which projects & teams worked on them
- Goals show artifacts created by projects and teams
- Goals show average challenge level by Elo
- Goals list competencies they support
- Goals list concepts they cover
- Goals show links to other goals, through three kinds of relationships: "related to", "depends upon", and "prepares for"
- Goals are categorized as "foundational", "practice/toy projects", "apprentice", "prototype", or "production"

## Goal Create View (Form)

- Input all key goal data (description, context, specs, team size, etc.)
- Add list of competencies the goal supports
- Add list of concepts the goal covers
- Goals can be linked to other goals, through three kinds of relationships: "related to", "depends upon", and "prepares for"
- Goals can be categorized into "foundational", "practice/toy projects", "apprentice", "prototype", or "production"
