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

export default function Rsvp() {
  const form = useForm();
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');
  const event = fakeMeetups.filter((meetup) => meetup.id === eventId)[0];

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
          <form className='flex flex-col gap-1 w-full'>
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
              name='addressLine1'
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
              name='addressLine2'
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
                name='city'
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
                name='state'
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
              <FormField
                control={form.control}
                name='zipCode'
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
