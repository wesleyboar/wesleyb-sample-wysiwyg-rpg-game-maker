// TODO: Export functions for external scripts (able to code share betwen libraries)
// TODO: Migrate logic to external scripts (unable to code share between libraries)

/** Classes for the CSS */
const CLASSNAMES = {
  neg: 'is-negative',
  pos: 'is-positive',
  // TODO: Delete when functionality is migrated out for all project #1 branches
  // disabled: 's-card-preview', // WARN: Overloaded property to simplify code
  // immune: 'js-immune'
}

// TODO: Delete when functionality is migrated out for all project #1 branches
// /** Toggle state of form (disabled or enabled i.e. preview or not)
//  * @parameter {Boolean} shouldDisable
//  * @parameter {HTMLFormElement} form
//  */
// function toggleState( shouldDisable, form ) {
//   const fieldsets = [ ...form.getElementsByTagName('fieldset') ];
//   // SEE: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods
//   const classlistAction = ( shouldDisable ) ? 'add' : 'remove';

//   document.body.classList[ classlistAction ]( CLASSNAMES.disabled );

//   fieldsets.forEach( fieldset => {
//     const isImmune = fieldset.classList.contains( CLASSNAMES.immune );
//     fieldset.disabled = ( shouldDisable && ! isImmune );
//   });
// }

/** Assign classname(s) based on value
 * @parameter {Number|String} value
 * @parameter {HTMLOutputElement|HTMLElement} input
 */
function assignClassFromValue( value, element ) {
  const isPositiveValue = ( value > 0 );
  const classToAdd = ( isPositiveValue ) ? CLASSNAMES.pos : CLASSNAMES.neg;
  const classToRemove = ( isPositiveValue ) ? CLASSNAMES.neg : CLASSNAMES.pos;

  element.classList.add( classToAdd );
  element.classList.remove( classToRemove );
}

/** Set element value based on element attribute(s)
 * @parameter {Number|String} value
 * @parameter {HTMLOutputElement|HTMLElement} input
 */
function setValue( value, element ) {
  const expectsValueAsData = ( element.dataset.value !== undefined );

  if ( expectsValueAsData ) {
    element.dataset.value = value;
  } else {
    element.value = value;
  }
}

/** Update `<output>`s that only requires the given input
 * @parameter {HTMLInputElement|HTMLSelectElement|HTMLTextareaElement} input
 */
function updateOutputs( input ) {
  const outputs = [ ...document.querySelectorAll(`
    output[for="${input.id}"],
    [data-output-for="${input.id}"]
  `) ];

  outputs.forEach( ( output ) => {
    const value = input.value; // RFE: Format value via a function
    setValue( value, output );
    assignClassFromValue( value, output );
  });
}

/** Initialize user experience */
function init() {
  const form = document.getElementById('card');
  const toggle = form.card_preview;
  // SEE: https://jsperf.com/queryselectorall-by-tags-v-concat-getelementsbytagname
  const inputs = [].concat(
    [ ...form.getElementsByTagName('input') ],
    [ ...form.getElementsByTagName('textarea') ],
    [ ...form.getElementsByTagName('select') ],
  );

  // Support value changes
  inputs.forEach( ( input ) => {
    updateOutputs( input );
    input.addEventListener('change', ( e ) => {
      updateOutputs( e.target );
    });
  });

  // TODO: Delete when functionality is migrated out for all project #1 branches
  // // Support state toggling
  // toggleState( toggle.checked, form );
  // toggle.addEventListener('change', ( e ) => {
  //   toggleState( e.target.checked, form );
  // });
}

// export {
//   init as initDynamicBehaviourForCard
// };

window.initDynamicBehaviourForCard = init;