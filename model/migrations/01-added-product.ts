import Migration, {MigrationFunction} from "contentful-migration";

export = function (migration: Migration) {
  const product = migration
      .createContentType("product")
      .name("Product")
      .description("A shop product")
      .displayField("title");

  product
      .createField("title")
      .name("title")
      .type("Symbol")
      .localized(false)
      .required(true)
      .validations([
        {
          unique: true
        }
      ])
      .disabled(false)
      .omitted(false);

  product
      .createField("slug")
      .name("slug")
      .type("Symbol")
      .localized(false)
      .required(true)
      .validations([
        {
          unique: true
        }
      ])
      .disabled(false)
      .omitted(false);

  product.changeFieldControl("title", "builtin", "singleLine", {});

  product.changeFieldControl("slug", "builtin", "slugEditor", {
    helpText: "Generated field"
  });
} as MigrationFunction;
