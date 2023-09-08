# <img width="904" alt="image" src="https://github.com/jdaniel-ap/reactify-portfolio/assets/74429277/c7942eef-e772-40e1-ac91-11c33bbf2563">


# ReactifyPortfolio

<table>
  <tr>
    <td>
      ReactifyPortfolio is a user-friendly web application designed to help individuals quickly create their personal portfolios. Whether you're an artist, designer, writer, or professional seeking to showcase your work, our app simplifies the process, making it accessible to users of all backgrounds.
    </td>
  </tr>
</table>

## Demo

Here is a working live demo : https://reactify-portfolio.netlify.app/

## How to use

### Instructions for Updating the `data.js` File

Follow these step-by-step instructions to customize the `data.js` file with your personal information and project details for your application.

#### Step 1: Locate the `data.js` File

Open your project directory using your preferred code editor.

#### Step 2: Edit the `data.js` File

In the project directory, navigate to `/src/utils/data`.

Open the `data.js` file for editing.

#### Step 3: Update Your Information

Modify the values in the `data` object to reflect your personal information. Replace the placeholders with your own details.

Example: Update `name`, `city`, `slogan`, `avatar`, and other personal information fields.

#### Step 4: Add Social Media Links

In the `socialMedia` array, add your social media profiles.

Provide the `name` (e.g., "twitter," "facebook").

If applicable, provide the `url` and `background` color for each profile. Feel free to add logos for each socialMedia if desired.

#### Step 5: List Your Tools and Technologies

Update the `tools` array with the tools and technologies you are familiar with or have experience using. Feel free to add logos for each tool if desired.

#### Step 6: Provide Your Details

In the `details` object, update the following sections:

- `about`: Write a brief description about yourself, your skills, and your passion for web development.
- `goals`: Describe your career goals and aspirations.
- `experience`: Highlight your experience as a web developer, including your skills and the technologies you've worked with.

In the `details` object, you can add additional fields, and they will be automatically included with the key as the title.

For example:

```javascript
{
  details: {
    about: "Your about description here...",
    goals: "Your goals description here...",
    experience: "Your experience description here...",
    // Add more custom fields here, and they will be included with key as title.
    customField1: "Custom field 1 description...",
    customField2: "Custom field 2 description...",
    "Custom Field 3": "Custom field 3 description...",
    "I love the ocean": "The great ocean...",
  },
}
```

#### Step 7: Add Your Projects

Under the `projects` array, include details for your projects. Each project should have:

- `id`: A unique identifier for the project.
- `title`: The project's title.
- `subtitle`: A short description or subtitle for the project.
- `image`: The path to the project's image/logo.
- `color`: A color associated with the project (if applicable).
- `details`: Provide an overview, approach, your role, and the tools used for each project.

#### Step 8: Include Project Assets (if applicable)

If your projects have associated images or assets, specify the image paths in the `assets` array for each project.

#### Step 9: Save Your Changes

After updating the `data.js` file with your information and project details, save the file.

#### Step 10: Review and Test

Double-check your changes to ensure accuracy. You can also run your application to verify that the data is correctly displayed.

#### Step 11: Commit Your Changes

If you're using version control (e.g., Git), commit your changes to save your progress.

By following these steps, you'll have a well-structured `data.js` file containing your personal information and project details for your application.

## Site

### Hero

<img width="1440" alt="image" src="https://github.com/jdaniel-ap/reactify-portfolio/assets/74429277/81d71657-7f36-458f-b2b8-2472c6302341">

### Projects grid

<img width="1440" alt="image" src="https://github.com/jdaniel-ap/reactify-portfolio/assets/74429277/7d0e90c3-d513-46fa-acee-756df71c3269">

### Personal details

<img width="1440" alt="image" src="https://github.com/jdaniel-ap/react-portfolio/assets/74429277/2c583ee5-5064-4803-bcdc-d90689129670">

### Project details

<img width="1440" alt="image" src="https://github.com/jdaniel-ap/react-portfolio/assets/74429277/dc7119f8-3124-48c1-b433-a5473d47b449">
<img width="1440" alt="image" src="https://github.com/jdaniel-ap/react-portfolio/assets/74429277/a3208338-c452-4952-a184-2ed8f070f1ed">

## Project Gallery

<img width="1440" alt="image" src="https://github.com/jdaniel-ap/react-portfolio/assets/74429277/e86ce12b-ea23-4f3f-8fa0-c6fb13c2f4b9">
<img width="1440" alt="image" src="https://github.com/jdaniel-ap/react-portfolio/assets/74429277/0be5ac5f-be2c-4e1b-b8bc-c536e2ef9244">

## Mobile support

The WebApp is compatible with devices of all sizes and all OS's, and consistent improvements are being made.

<img width="1440" alt="image" src="https://github.com/jdaniel-ap/react-portfolio/assets/74429277/9eba73eb-7041-4c5f-843e-c1e2f4f5c33a">

## [Usage](https://reactify-portfolio.netlify.app/)
### Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

### Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here]() by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](). Please include sample queries and their corresponding results.

## Built with

- [React](https://react.dev/) - Javascript develoment library.
- [Framer Motion](https://www.framer.com/motion/) - Animation library.
- [Styled Components](https://styled-components.com/) - Js-in-css library: free, Customizable and Cross-browser compatible.

## To-do

- Add link to resume

## Team

[![Jose Arreaza](https://avatars1.githubusercontent.com/u/74429277?v=3&s=100)](https://github.com/jdaniel-ap)

## [License]()

MIT © [Jose Daniel Arreaza](https://github.com/jdaniel-ap)
