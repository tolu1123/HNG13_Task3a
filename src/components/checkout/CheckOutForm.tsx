"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Wrong format"),
  phone: z.string().min(10, "Invalid phone number"),
  address: z.string().min(2, "Address is required"),
  zip: z.string().min(3, "Invalid ZIP"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  paymentMethod: z.enum(["eMoney", "cash"]),
});

type FormData = z.infer<typeof formSchema>;

function CheckOutForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      paymentMethod: "eMoney",
    },
  });

  const paymentMethod = useWatch({
    control: form.control,
    name: "paymentMethod",
  });

  console.log("Payment Method:", paymentMethod);

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className=''>
      <form
        id='form-checkout'
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-10 w-full mx-auto'
      >
        <FieldGroup>
          {/* Billing Details */}
          <section>
            <h2 className='text-sm font-bold text-orange-500 mb-4 tracking-wide'>
              BILLING DETAILS
            </h2>

            <div className='grid sm:grid-cols-2 gap-6'>
              {/* Name */}
              <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className='flex justify-between items-center mb-1'>
                      <FieldLabel htmlFor='form-customer-name'>Name</FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type='text'
                      placeholder='Alexei Ward'
                      id='form-customer-name'
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />

              {/* Email */}
              <Controller
                name='email'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className='flex justify-between items-center mb-1'>
                      <FieldLabel htmlFor='form-customer-email'>
                        Email Address
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type='email'
                      placeholder='alexei@gmail.com'
                      id='form-customer-email'
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />

              {/* Phone */}
              <Controller
                name='phone'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className='flex justify-between items-center mb-1'>
                      <FieldLabel htmlFor='form-customer-phone'>
                        Phone Number
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type='text'
                      placeholder='+1 (202) 555-0136'
                      id='form-customer-phone'
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />
            </div>
          </section>

          {/* Shipping Info */}
          <section>
            <h2 className='text-sm font-bold text-orange-500 mb-4 tracking-wide'>
              SHIPPING INFO
            </h2>
            <div className='grid gap-6'>
              <Controller
                name='address'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className='flex justify-between items-center mb-1'>
                      <FieldLabel htmlFor='form-shipping-address'>
                        Address
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type='text'
                      placeholder='1137 Williams Avenue'
                      id='form-shipping-address'
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />

              <div className='grid sm:grid-cols-2 gap-6'>
                <Controller
                  name='zip'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className='flex justify-between items-center mb-1'>
                        <FieldLabel htmlFor='form-customer-zip'>
                          ZIP Code
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>
                      <Input
                        type='text'
                        placeholder='10001'
                        id='form-customer-zip'
                        aria-invalid={fieldState.invalid}
                        {...field}
                        className={cn(
                          "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                        )}
                      />
                    </Field>
                  )}
                />

                <Controller
                  name='city'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className='flex justify-between items-center mb-1'>
                        <FieldLabel htmlFor='form-shipping-city'>
                          City
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>
                      <Input
                        type='text'
                        placeholder='New York'
                        aria-invalid={fieldState.invalid}
                        id='form-shipping-city'
                        {...field}
                        className={cn(
                          "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                        )}
                      />
                    </Field>
                  )}
                />
              </div>

              <Controller
                name='country'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className='flex justify-between items-center mb-1'>
                      <FieldLabel htmlFor='form-shipping-country'>
                        Country
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type='text'
                      placeholder='United States'
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id='form-shipping-country'
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h2 className='text-sm font-bold text-orange-500 mb-4 tracking-wide'>
              PAYMENT DETAILS
            </h2>

            <Controller
              name='paymentMethod'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className='grid grid-cols-1 sm:grid-cols-2'
                >
                  <h6 className='text-xs font-semibold text-gray-700 mb-2 block col-span-1'>
                    Payment Method
                  </h6>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className='col-span-1 grid grid-cols-1 gap-4'
                  >
                    <FieldLabel
                      className={cn(
                        "w-full flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition-all text-[0.875rem]/[100%]! tracking-[-0.01563rem]!",
                        "hover:border-orange-500",
                        field.value === "eMoney" &&
                          "border-orange-500! bg-white!"
                      )}
                    >
                      <RadioGroupItem value='eMoney' />
                      e-Money
                    </FieldLabel>

                    <FieldLabel
                      className={cn(
                        "w-full flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition-all text-[0.875rem]/[100%]! tracking-[-0.01563rem]!",
                        "hover:border-orange-500",
                        field.value === "cash" && "border-orange-500! bg-white!"
                      )}
                    >
                      <RadioGroupItem value='cash' className='' />
                      Cash on Delivery
                    </FieldLabel>
                  </RadioGroup>
                </Field>
              )}
            />
          </section>
        </FieldGroup>
      </form>
    </div>
  );
}

export default CheckOutForm;
