const phases = [
    {
        description: "Lorem ipsum dolor sit <code>align-items</code> adipisicing elit. Perferendis corporis quae laudantium quaerat blanditiis, odio temporibus autem obcaecati sapiente saepe sequi quidem tenetur, nulla perspiciatis quo deserunt amet, debitis voluptas.",
        
        editor_start_content: 
        `.flex_learn {}`,

        result_start_elements: `
            <div class="player" style="background-color: red;"></div>
        `,

        result_configuration: `
            .flex_learn {
                
            }
        `,

        destination_elements: `
            <div class="destination" style="background-color: red;"></div>
        `,

        destination_configuration: `
            .flex_destination {
                flex-direction: column;
                align-items: flex-end;
            }
        `,

        assertion: `.flex_learn{align-items:center;justify-content:center;}.grey{align-self: end;}`

    },

    {
        description: "Lorem ipsum dolor sit <code>align-items</code> adipisicing elit. Perferendis corporis quae laudantium quaerat blanditiis, odio temporibus autem obcaecati sapiente saepe sequi quidem tenetur, nulla perspiciatis quo deserunt amet, debitis voluptas.",
        
        editor_start_content: 
        `.flex_learn {}`,

        result_start_elements: `
            <div class="player" style="background-color: red;"></div>
            <div class="player" style="background-color: blue;"></div>
            <div class="player" style="background-color: yellow;"></div>
        `,

        destination_elements: `
            <div class="destination" style="background-color: red;"></div>
            <div class="destination" style="background-color: blue;"></div>
            <div class="destination" style="background-color: yellow;"></div>
        `,

        destination_configuration: `
            .flex_destination {
                flex-direction: column;
                align-items: flex-end;
            }
        `,

        assertion: `.flex_learn{align-items:center;justify-content:center;}.grey{align-self: end;}`
    },
    
    {
        description: "Lorem ipsum dolor sit <code>align-items</code> adipisicing elit. Perferendis corporis quae laudantium quaerat blanditiis, odio temporibus autem obcaecati sapiente saepe sequi quidem tenetur, nulla perspiciatis quo deserunt amet, debitis voluptas.",
        
        editor_start_content: 
        `.flex_learn {}`,

        result_start_elements: `
            <div class="player" style="background-color: red;"></div>
            <div class="player" style="background-color: blue;"></div>
            <div class="player" style="background-color: yellow;"></div>
        `,

        destination_elements: `
            <div class="destination" style="background-color: red;"></div>
            <div class="destination" style="background-color: blue;"></div>
            <div class="destination" style="background-color: yellow;"></div>
        `,

        destination_configuration: `
            .flex_destination {
                flex-direction: row;
                align-items: flex-end;
                justify-content: space-between;
            }
        `,

        assertion: `.flex_learn{align-items:center;justify-content:center;}.grey{align-self: end;}`
    }
]