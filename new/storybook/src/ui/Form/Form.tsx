import React, { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { Form as FormFormik, Formik, FormikHelpers, FormikValues } from 'formik';

export interface FormProps {
  value: FormikValues,
  validations?: object,
  onSubmit?(values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void
}

export const Form: FunctionComponent<FormProps> = (props) => {
  const submitted = (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    if (props.onSubmit) {
      props.onSubmit(values, formikHelpers);
    }
  }

  return (
    <Formik
      initialValues={props.value}
      validationSchema={props.validations ?? undefined}
      onSubmit={submitted}
    >
      {(): JSX.Element => (
        <FormFormik>
          {props.children}
        </FormFormik>
      )}
    </Formik>
  )
}