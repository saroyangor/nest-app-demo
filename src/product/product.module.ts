import { Module } from '@nestjs/common';
import { TypegooseModule } from '@m8a/nestjs-typegoose';

import { ProductController } from './product.controller';
import { ProductModel } from './product.model';

@Module({
	controllers: [ProductController],
	imports: [
		TypegooseModule.forFeature([{
			typegooseClass: ProductModel,
			schemaOptions: { collection: 'Product' },
		}]),
	],
})
export class ProductModule {
}
