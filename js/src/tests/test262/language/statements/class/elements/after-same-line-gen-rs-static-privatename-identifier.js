// |reftest| skip -- class-static-fields-private is not supported
// This file was procedurally generated from the following sources:
// - src/class-elements/rs-static-privatename-identifier.case
// - src/class-elements/productions/cls-decl-after-same-line-gen.template
/*---
description: Valid Static PrivateName (field definitions after a generator in the same line)
esid: prod-FieldDefinition
features: [class-static-fields-private, generators, class, class-fields-public]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Continue"


    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


class C {
  *m() { return 42; } static #$; static #_; static #\u{6F}; static #\u2118; static #ZW_\u200C_NJ; static #ZW_\u200D_J;
  static $(value) {
    this.#$ = value;
    return this.#$;
  }
  static _(value) {
    this.#_ = value;
    return this.#_;
  }
  static \u{6F}(value) {
    this.#\u{6F} = value;
    return this.#\u{6F};
  }
  static \u2118(value) {
    this.#\u2118 = value;
    return this.#\u2118;
  }
  static ZW_\u200C_NJ(value) {
    this.#ZW_\u200C_NJ = value;
    return this.#ZW_\u200C_NJ;
  }
  static ZW_\u200D_J(value) {
    this.#ZW_\u200D_J = value;
    return this.#ZW_\u200D_J;
  }
}

var c = new C();

assert.sameValue(c.m().next().value, 42);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(C.$(1), 1);
assert.sameValue(C._(1), 1);
assert.sameValue(C.\u{6F}(1), 1);
assert.sameValue(C.\u2118(1), 1);
assert.sameValue(C.ZW_\u200C_NJ(1), 1);
assert.sameValue(C.ZW_\u200D_J(1), 1);


reportCompare(0, 0);