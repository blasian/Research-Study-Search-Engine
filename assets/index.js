$(document).ready(function(){
    $('#drugs').tagsinput({
        typeahead : {
            afterSelect: function(val) { this.$element.val(""); },
            source: drugsList
        }
    });

    $('#conditions').tagsinput({
        typeahead : {
            afterSelect: function(val) { this.$element.val(""); },
            source: diseases
        }
    });

    $('#submit').click(function(evt) {
        // suggest drugs
        var drugs = $('#drugs').tagsinput('items');
        var fuzzDrugs = FuzzySet(drugsList);
        var halt = false;
        for (var i = 0; i < drugs.length; i++) {
            var drug = drugs[i];
            var score = fuzzDrugs.get(drug);
            if (!(score[0][0] === 1)) {
                $(".drug-suggestion").html("Did you mean <b>" + score[0][1] + "</b>?");
                halt = true;
            } else {
                $(".drug-suggestion").empty();
                halt = false;
            }
        }

        // suggest conditions
        var conditions = $('#conditions').tagsinput('items');
        var fuzzConditions = FuzzySet(diseases);
        for (var i = 0; i < conditions.length; i++) {
            var condition = conditions[i];
            var score = fuzzConditions.get(condition);
            // Do not display option if below .5?
            if (!(score[0][0] === 1)) {
                $(".condition-suggestion").html("Did you mean <b>" + score[0][1] + "</b>?");
                halt = true;
            }
        }
        if (halt) {
            evt.preventDefault(); 
            return false;
        }
    });
});