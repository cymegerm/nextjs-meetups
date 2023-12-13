'use client';

import { useSearchParams } from 'next/navigation';
import { fakeMeetups } from '@/api/_fakeMeetups';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn-ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/shadcn-ui/button';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  address: z.object({
    addressLine1: z.string().min(2).max(50),
    addressLine2: z.string().min(2).max(50).optional(),
    city: z.string().min(2).max(189),
    state: z.string().min(2).max(90),
    zipCode: z.string().min(2).max(18),
    country: z.string().min(2).max(90),
  }),
  /*numberOfGuests: z.number().min(1),*/
});

export default function Rsvp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');
  const event = fakeMeetups.filter((meetup) => meetup.id === eventId)[0];

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center max-w-lg mx-auto px-4 sm:px-0'>
        <h1 className='text-center text-4xl'>{event.title}</h1>
        <h3 className='text-center text-1xl mt-1'>{event.address}</h3>
        <div className='w-full text-center text-2xl mt-5 p-6 bg-rose-600 rounded-lg'>
          <h2>Seat Reservation</h2>
          <h6 className='text-xs'>
            &#42; Max. {event.maxSeatsPerEmail} seats per email address
          </h6>
        </div>
        <Form {...form}>
          <form
            className='flex flex-col gap-1 w-full'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className='flex flex-col md:flex-row gap-1 md:gap-4 mt-5'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <input
                        type='text'
                        placeholder='First Name'
                        className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <input
                        type='text'
                        placeholder='Last Name'
                        className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <input
                      type='text'
                      placeholder='Email Address'
                      className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address.addressLine1'
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <input
                      type='text'
                      placeholder='Address Line 1'
                      className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address.addressLine2'
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <input
                      type='text'
                      placeholder='Address Line 2'
                      {...field}
                      className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col md:flex-row gap-1 md:gap-4'>
              <FormField
                control={form.control}
                name='address.city'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <input
                        type='text'
                        placeholder='City'
                        {...field}
                        className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address.state'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <input
                        type='text'
                        placeholder='State'
                        {...field}
                        className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-4'>
              <FormField
                control={form.control}
                name='address.zipCode'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <input
                        type='text'
                        placeholder='Zip Code'
                        {...field}
                        className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address.country'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <input
                        type='text'
                        placeholder='Country'
                        {...field}
                        className='w-full px-4 py-2 rounded-sm text-secondary-foreground'
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className='w-2/3 mx-auto mt-4 px-4 py-7 rounded-sm bg-green-600 text-xl hover:bg-green-600/90 transition-all'
              type='submit'
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
