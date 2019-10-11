/**
 * A list of sets of options for an input choice
 * @typedef {Array.<OptionGroup>} OptionGroupList
 */
/**
 * A named list of options for an input choice
 * @typedef {Object} OptionGroup
 * @prop {String} label - The name of the list, for humans
 * @prop {OptionList} options - A list of options
 */
/**
 * A list of options for an input choice
 * @typedef {Array.<Option>} OptionList
 */
/**
 * An option for an input choice
 * @typedef {Object} Option
 * @prop {String} label - The name of the option, for humans
 * @prop {String} value - The option value
 */

/**
 * The identity of an RPG entity
 * @typedef {Object} IdentityProps
 * @prop {String} name - Entity name for humans
 * @prop {String} shape - Entity shape i.e. appearance
 * @prop {String} desc - Entity description
 * @prop {String} element - Entity elemental enchantment
 */
/**
 * The attributes of an RPG entity
 * @typedef {Object} AttributeProps
 * @prop {String} power - Entity attribute of strength/weakness
 * @prop {String} speed - Entity attribute of fastness/slowness
 * @prop {String} defense - Entity attribute of vulernerability
 */