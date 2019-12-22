# The Grand Design

A brainstorm of how the site will be structured.

This is to help split the site up into React components.

## Entities

<pre>
Group {
    id: *int,
    name: string,
    creator: int,
    description: string,
    members: int[],
    relationships: int[],
    dateCreated: date,
    inDrawState: boolean,
    chat: ???
}
</pre>

<pre>
User {
    id: *int,
    username: string,
    email: string,
    password: encoded,
    groups: int[],
    wishlists: int[],
    confirmed: boolean, // False until confirmation email link clicked
    disabled: boolean, // If false, all activity suspended. 
    dateClosed: date,
    dateCreated: date
}
</pre>

<pre>
SantaRecipientRestriction {
    id: *int,
    group: int,
    userA: int,
    userB: int,
    restriction: int 
    // 1 = banned (A -> B), 2 = double banned (A <-> B)
}
</pre>

<pre>
SantaRecipientPair {
    id: *int,
    group: int,
    santa: int,
    recipient: int
}
</pre>

<pre>
Wishlist {
    id: *int,
    group: int,
    user: int,
    wishlistItems: int[], // Order of array denotes order of items
    dateCreated: date,
    dateUpdated: date
}
</pre>

<pre>
WishlistItem {
    id: *int,
    wishlist: int,
    title: string,
    description: string,
    dateCreated: date,
}
</pre>

## Sitemap

- On the **Homepage**, a User{} can:
    - See information about Secret Santa
    - Log In
    - Create Account

- On **Create Account**, the User{} can:
    - Enter their:
        - Username
        - Email address
        - Password
    - If their username is in use, their email has already been registered, or their password is insufficiently complex, they receive an error
    - If all credentials are good, they are sent to their *Dashboard*
    - They are also sent a *Confirmation Email*, **which they must attend to in 7 days**, or their account will be suspended

- On **Log In**, the User{} can:
    - Enter their:
        - Username
        - Password

- On the **Dashboard**, the User{} can:
    - Read a notification about their confirmation email (if they are not yet confirmed)
        - The user can trigger a resend of the email, in case they have deleted it
    - See all Groups{} they are part of
    - See all Groups{} they have invitations for, which they can accept or deny
    - Create a Group{}
    - Search for a Group{}

- On **Create Group**, the User{} can:
    - Create a new group with:
        - Name
        - Description
        - Members
    - If a member (User{}) is added who isn't registered, they are sent a registration email
    - If a member (User{}) is added who is registered, the group is presented on their dashboard, where they can accept or reject the membership

- On **Group Overview**, the User{} can:
    - See members of a group
    - Post in group chat (???)
    - Link or full display of User{}'s wishlist
    - Start a draw.

- When **Group Overview** is in a draw state:
    - No new members may be added
    - View controls to be paired to a *random fellow User{} in the group
    - View list of users yet to draw (???)

- When **Group Overview** draw is complete:
    - View the Recipient (User{}) you have been assigned
    - Link or full display of Recipient's wishlist

- When **Group Overview** finish date is passed:
    - Group summary is displayed
    - Option to reset group to pre-draw state