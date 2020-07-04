import React from "react";

//Formik
import { Formik, Form, Field, FieldArray } from "formik";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const TAX_RATE = 0.07;

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function priceRow(qty, unit) {
  return qty * unit;
}

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("100 vacas vendidas", 100, 1.15),
  createRow("PAGO: 10 partos Veterinario", -10, 45.99),
  createRow("1 litro de leche vendido a la serenisima", 1, 17.99)
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CustomForm() {
  const classes = useStyles();

  return (
    <>
      <h1>soy el customForm</h1>
      <div style={{ margin: 50 }}>
        <Formik
          initialValues={rows}
          onSubmit={values =>
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          render={({ values }) => (
            <Form>
              <FieldArray
                name="rows"
                render={arrayHelpers => (
                  <div>
                    {values && values.length > 0 ? (
                      values.map((rows, index) => (
                        <div key={index}>
                          {console.log(rows.desc)}
                          <Field name={`rows.${index}.desc`} />
                          <Field name={`rows.${index}.qty`} />
                          <Field name={`rows.${index}.unit`} />
                          <Field name={`rows.${index}.price`} />

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
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                      >
                        {/* show this when user has removed all rows from the list */}
                        Agregar Item
                      </button>
                    )}
                    <div>
                      <button type="submit">Guardar</button>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        ></Formik>
      </div>
    </>
  );
}
