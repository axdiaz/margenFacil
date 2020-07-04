import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const FriendList = () => (
  <div>
    <h1>Items</h1>
    <Formik
      initialValues={{
        items: [
          {
            descripcion: "100 vacas vendidas",
            cantidad: 100,
            precioUnitario: 1.15,
            subtotal: 100,
          },
          {
            descripcion: "pago: 10 partos Veterinario",
            cantidad: -10,
            precioUnitario: 45.99,
            subtotal: 100,
          },
          {
            descripcion: "1 litro de leche vendido a la serenisima",
            cantidad: 100,
            precioUnitario: 1.15,
            subtotal: 100,
          },
        ],
      }}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="items"
            render={(arrayHelpers) => (
              <div>
                {values.items && values.items.length > 0 ? (
                  values.items.map((items, index) => (
                    <div key={index}>
                      <Field name={`items.${index}.descripcion`} />
                      <Field name={`items.${index}.cantidad`} />
                      <Field name={`items.${index}.precioUnitario`} />
                      <Field name={`items.${index}.subtotal`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove an item from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all items from the list */}
                    Add a items
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export { FriendList };
