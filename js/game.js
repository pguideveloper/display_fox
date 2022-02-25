class Game {

    current_phase;
    current_phase_number = 0;

    play(phase) {
        this.current_phase_number = phase;
        this.current_phase = phases[phase];
        this.construct(this.current_phase);
    }

    next_phase() {
        if(this.current_phase_number < phases.length - 1) {
            let next_phase = this.current_phase_number + 1;
            this.play(next_phase);
        }
    }

    last_phase() {
        if (this.current_phase_number > 0) {
            let last_phase = this.current_phase_number - 1;
            this.play(last_phase);
        }
    }

    construct(phase) {
        const question_div = document.querySelector(".question");
        question_div.innerHTML = phase.description;

        const editor_div = document.querySelector("#editor");
        editor_div.innerHTML = this.editor_start_content(phase.editor_start_content);

        const flex_learn_div = document.querySelector(".flex_learn");
        flex_learn_div.innerHTML = phase.result_start_elements;

        const flex_destination_div = document.querySelector(".flex_destination");
        flex_destination_div.innerHTML = phase.destination_elements;

        //Remove style tag before creating again (Saving performance)
        this.clear_style_tags();

        let style_sheet = document.createElement("style");
        document.head.appendChild(style_sheet);
        style_sheet.innerText = phase.destination_configuration;

        const current_phase_div = document.querySelector(".current_phase");
        current_phase_div.innerHTML = this.current_phase_number + 1;

        const total_phases_div = document.querySelector(".total_phases");
        total_phases_div.innerHTML = phases.length;
    }

    editor_start_content(start_content) {
        code_mirror_editor.setValue("");
        code_mirror_editor.clearHistory();
        let doc = code_mirror_editor.getDoc();
        let cursor = doc.getCursor();
        doc.replaceRange(start_content, cursor);
    }

    clear_style_tags() {
        Array.prototype.forEach.call( document.querySelectorAll("style"), function( node ) {
            node.parentNode.removeChild( node );
        });
    }
}

const game = new Game(); 
game.play(0);